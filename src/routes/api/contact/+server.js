import { RESEND_API_KEY } from "$env/static/private";
import { Resend } from "resend";
import { json } from "@sveltejs/kit";

const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Feet on the Go <onboarding@resend.dev>",
      to: "matt.b.ruetz@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return json({ error: "Failed to send email" }, { status: 500 });
    }

    return json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}
