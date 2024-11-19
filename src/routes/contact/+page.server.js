import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import { env } from "$env/dynamic/private";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST, // e.g., "smtp.gmail.com"
  port: env.SMTP_PORT, // e.g., 587
  secure: env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: env.SMTP_USER, // email address
    pass: env.SMTP_PASSWORD, // email password or app-specific password
  },
});

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

      // Send email using nodemailer instead of Resend
      const info = await transporter.sendMail({
        from: `"Feet on the Go Website" <${env.SMTP_USER}>`,
        to: env.RECIPIENT_EMAIL,
        replyTo: sanitizedEmail,
        subject: `New Contact Form Message from ${sanitizedName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <h3>Message:</h3>
          <p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
        `,
      });

      if (!info.messageId) {
        console.error("Email sending failed:", info);
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
