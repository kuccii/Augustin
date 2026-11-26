// Server-only: builds and sends the contact-form email through Resend (https://resend.com).
// Configuration comes from environment variables (set them in the Vercel project settings):
//   RESEND_API_KEY     required. Without it the form reports "not configured" and the visitor is pointed to a mailto link.
//   CONTACT_TO_EMAIL   optional. Where messages are delivered. Defaults to Augustin's address.
//   CONTACT_FROM       optional. Sender, e.g. "Augustin Kimonyo <contact@yourdomain.com>" once a domain is verified in
//                      Resend. Defaults to Resend's shared test sender, which can only deliver to the Resend account owner.
export const DEFAULT_TO = "akimonyo1@gmail.com";
const DEFAULT_FROM = "Augustin Kimonyo Website <onboarding@resend.dev>";

// A header-safe single line: no line breaks, bounded length.
const oneLine = (value, max) => String(value ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, max);

export function buildEmail(data) {
  const name = oneLine(data.name, 100);
  const subject = oneLine(data.subject, 150);
  return {
    subject: `[Website] ${subject || "New message"} (from ${name})`,
    text: [
      `Name: ${name}`,
      `Email: ${oneLine(data.email, 200)}`,
      `Subject: ${subject || "-"}`,
      "",
      data.message,
      "",
      "—",
      "Sent from the contact form on Augustin Kimonyo's website. Reply to this email to answer the sender.",
    ].join("\n"),
  };
}

/** Returns { ok: true } or { ok: false, error: "not_configured" | "send_failed" }. */
export async function deliverMessage(data, env = process.env, fetchImpl = fetch) {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "not_configured" };

  const { subject, text } = buildEmail(data);
  try {
    const response = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.CONTACT_FROM || DEFAULT_FROM,
        to: [env.CONTACT_TO_EMAIL || DEFAULT_TO],
        reply_to: oneLine(data.email, 200),
        subject,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("Contact form: Resend rejected the message", response.status, await response.text().catch(() => ""));
      return { ok: false, error: "send_failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("Contact form: could not reach Resend", error);
    return { ok: false, error: "send_failed" };
  }
}
