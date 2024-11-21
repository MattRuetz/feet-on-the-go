<script>
  import { enhance } from "$app/forms";

  let formData = $state({
    name: "",
    email: "",
    message: "",
    submitted: false,
    errors: {},
    isLoading: false,
  });

  // Validation functions
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function sanitizeInput(input) {
    return input.trim().replace(/[<>]/g, ""); // Basic XSS prevention
  }

  function validateForm() {
    const errors = {};

    // Name validation
    if (!formData.name) {
      errors.name = "Name is required";
    } else if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 100) {
      errors.name = "Name must be less than 100 characters";
    }

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    } else if (formData.email.length > 254) {
      errors.email = "Email must be less than 254 characters";
    }

    // Message validation
    if (!formData.message) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      errors.message = "Message must be less than 1000 characters";
    }

    formData.errors = errors;
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Reset previous submission states
    formData.submitted = false;
    formData.errors = {};

    // Validate form
    if (!validateForm()) {
      return;
    }

    formData.isLoading = true;

    try {
      // Sanitize inputs before sending
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email.toLowerCase()),
        message: sanitizeInput(formData.message),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add CSRF token if you have one
          // "X-CSRF-Token": getCsrfToken(),
        },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Reset form on success
      formData = {
        name: "",
        email: "",
        message: "",
        submitted: true,
        errors: {},
        isLoading: false,
      };
    } catch (err) {
      console.error("Error:", err);
      formData.errors.submit = "Failed to send message. Please try again.";
      formData.isLoading = false;
    }
  }
</script>

<form
  class="space-y-4"
  method="POST"
  use:enhance={() => {
    formData.isLoading = true;

    return async ({ result }) => {
      formData.isLoading = false;

      if (result.type === "success") {
        formData.submitted = true;
        formData.name = "";
        formData.email = "";
        formData.message = "";
        formData.errors = {};
      } else if (result.type === "failure") {
        formData.errors = result.data?.errors || {
          submit: "Failed to send message",
        };
      }
    };
  }}
  novalidate
>
  {#if formData.submitted}
    <div class="text-green-600 p-4 bg-green-50 rounded" role="alert">
      Thank you for your message! We'll get back to you soon.
    </div>
  {/if}

  {#if formData.errors.submit}
    <div class="text-red-600 p-4 bg-red-50 rounded" role="alert">
      {formData.errors.submit}
    </div>
  {/if}

  <div>
    <label for="name" class="block text-lg font-medium text-gray-900">
      Name <span class="text-red-600">*</span>
    </label>
    <input
      type="text"
      id="name"
      name="name"
      autocomplete="name"
      required
      maxlength="100"
      bind:value={formData.name}
      class="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500
        {formData.errors.name ? 'border-red-500' : ''}"
      aria-invalid={formData.errors.name ? "true" : "false"}
    />
    {#if formData.errors.name}
      <p class="mt-1 text-red-600 text-sm" role="alert">
        {formData.errors.name}
      </p>
    {/if}
  </div>

  <div>
    <label for="email" class="block text-lg font-medium text-gray-900">
      Email <span class="text-red-600">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      required
      maxlength="254"
      bind:value={formData.email}
      class="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500
        {formData.errors.email ? 'border-red-500' : ''}"
      aria-invalid={formData.errors.email ? "true" : "false"}
    />
    {#if formData.errors.email}
      <p class="mt-1 text-red-600 text-sm" role="alert">
        {formData.errors.email}
      </p>
    {/if}
  </div>

  <div>
    <label for="message" class="block text-lg font-medium text-gray-900">
      Message <span class="text-red-600">*</span>
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
      maxlength="1000"
      bind:value={formData.message}
      class="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500
        {formData.errors.message ? 'border-red-500' : ''}"
      aria-invalid={formData.errors.message ? "true" : "false"}
    ></textarea>
    {#if formData.errors.message}
      <p class="mt-1 text-red-600 text-sm" role="alert">
        {formData.errors.message}
      </p>
    {/if}
    <p class="mt-1 text-sm text-gray-500">
      {formData.message.length}/1000 characters
    </p>
  </div>

  <button
    type="submit"
    class="inline-flex justify-center items-center rounded-md border border-transparent
           bg-sky-700 py-2 px-4 text-lg font-medium text-white shadow-sm
           hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500
           focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={formData.isLoading}
    aria-busy={formData.isLoading}
  >
    {#if formData.isLoading}
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Sending...
    {:else}
      Send Message
    {/if}
  </button>
</form>
