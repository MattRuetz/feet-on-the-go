import { fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Add the access key and recipient email to the data object
    data.access_key = env.WEB3FORMS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return fail(400, {
          errors: { submit: result.message || "Failed to send message" },
        });
      }

      return { success: true };
    } catch (error) {
      console.error("Form submission error:", error);
      return fail(500, {
        errors: { submit: "Failed to send message. Please try again." },
      });
    }
  },
};
