import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Download, Loader2, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL, CV_URL } from "@/lib/cv-data";
import { sendContactMessage } from "@/lib/contact";

const EMPTY = { name: "", email: "", subject: "", message: "", website: "" };

export default function Contact() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState(EMPTY);
  // idle | sending | sent | error
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const set = (field) => (event) => setValues((v) => ({ ...v, [field]: event.target.value }));

  async function onSubmit(event) {
    event.preventDefault();
    if (status.state === "sending") return;
    setStatus({ state: "sending", message: "" });
    try {
      const result = await send({ data: values });
      if (result.ok) {
        setValues(EMPTY);
        setStatus({ state: "sent", message: "" });
      } else if (result.error === "not_configured") {
        setStatus({ state: "error", message: "The contact form is not available right now." });
      } else {
        setStatus({ state: "error", message: "Your message could not be sent." });
      }
    } catch {
      setStatus({ state: "error", message: "Please check your details and try again." });
    }
  }

  const mailto = `mailto:${CONTACT_EMAIL}${values.subject ? `?subject=${encodeURIComponent(values.subject)}` : ""}`;
  const sending = status.state === "sending";

  return (
    <footer id="contact" className="rounded-t-[2rem] bg-brand px-5 pb-10 pt-24 text-brand-foreground md:mx-8 md:rounded-t-[2.5rem] md:px-12 md:pt-32">
      <p className="mb-4 text-sm uppercase tracking-widest text-brand-foreground/70">[ Contact ]</p>
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-6xl font-extrabold leading-[0.9] tracking-tighter md:text-7xl lg:text-[5.5rem]">Let’s talk<br />equality.</h2>
          <p className="mt-8 max-w-md text-lg text-brand-foreground/80">
            For consultancy, training, speaking or research collaboration, send a message and I will reply as soon as I can.
          </p>
          <div className="mt-8 space-y-3 text-base">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 font-semibold underline-offset-4 transition hover:underline">
              <Mail className="h-5 w-5 shrink-0" />{CONTACT_EMAIL}
            </a>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 shrink-0" />Kigali, Rwanda</p>
          </div>
          <a href={CV_URL} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition hover:bg-card hover:text-card-foreground">
            Download full CV <Download className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-3xl bg-card p-6 text-card-foreground md:p-8 lg:col-span-3">
          {status.state === "sent" ? (
            <div role="status" className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center">
              <CheckCircle2 className="h-14 w-14 text-brand" />
              <h3 className="text-2xl font-bold">Message sent</h3>
              <p className="max-w-sm text-muted-foreground">Thank you for reaching out. I will get back to you at the email address you provided.</p>
              <Button variant="outline" onClick={() => setStatus({ state: "idle", message: "" })}>Send another message</Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your name</Label>
                  <Input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={values.name} onChange={set("name")} disabled={sending} className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Your email</Label>
                  <Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={200} value={values.email} onChange={set("email")} disabled={sending} className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject <span className="font-normal text-muted-foreground">(optional)</span></Label>
                <Input id="contact-subject" name="subject" maxLength={150} value={values.subject} onChange={set("subject")} disabled={sending} className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} value={values.message} onChange={set("message")} disabled={sending} placeholder="How can I help?" />
              </div>
              {/* Honeypot: hidden from people and screen readers; bots fill it in. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
              </div>

              <div aria-live="polite">
                {status.state === "error" && (
                  <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {status.message} You can also write directly to{" "}
                    <a href={mailto} className="font-semibold underline">{CONTACT_EMAIL}</a>.
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={sending} className="h-12 rounded-full px-8 text-base hover:bg-brand hover:text-brand-foreground">
                  {sending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</> : <>Send message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
                <p className="text-sm text-muted-foreground">Your details are only used to reply to you.</p>
              </div>
            </form>
          )}
        </div>
      </div>
      <p className="mt-16 border-t border-brand-foreground/30 pt-6 text-sm text-brand-foreground/70">© Augustin Kimonyo · Kigali, Rwanda</p>
    </footer>
  );
}
