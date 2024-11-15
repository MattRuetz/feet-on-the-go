import { fail } from "@sveltejs/kit";
import { Resend } from "resend";
import { env } from "$env/dynamic/private";

const resend = new Resend(env.RESEND_API_KEY);

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    // Validate inputs
    const errors = {};

    if (!name || typeof name !== "string" || name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      errors.email = "Valid email is required";
    }

    if (!message || typeof message !== "string" || message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors });
    }

    try {
      // Sanitize inputs
      const sanitizedName = name.toString().trim().replace(/[<>]/g, "");
      const sanitizedEmail = email
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[<>]/g, "");
      const sanitizedMessage = message.toString().trim().replace(/[<>]/g, "");

      const { data: emailResult, error } = await resend.emails.send({
        from: "Feet on the Go <onboarding@resend.dev>",
        to: ["matt.b.ruetz@gmail.com"],
        reply_to: sanitizedEmail,
        subject: `New Contact Form Message from ${sanitizedName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <h3>Message:</h3>
          <p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return fail(500, {
          errors: { submit: "Failed to send message. Please try again." },
        });
      }

      return { success: true };
    } catch (error) {
      console.error("Email sending error:", error);
      return fail(500, {
        errors: { submit: "Failed to send message. Please try again." },
      });
    }
  },
};
