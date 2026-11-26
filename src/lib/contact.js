import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// A public endpoint: every field is validated and length-bounded before anything is sent.
const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().max(200).email("Please enter a valid email address"),
  subject: z.string().trim().max(150).default(""),
  message: z.string().trim().min(10, "Please write a few more words").max(5000),
  // Honeypot: real visitors never see or fill this field; bots usually do.
  website: z.string().max(200).default(""),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true }; // pretend success to bots, send nothing
    const { deliverMessage } = await import("./contact-mail.server.js");
    return deliverMessage(data);
  });
