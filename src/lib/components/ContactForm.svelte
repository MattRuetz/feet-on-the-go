<script>
  let { accessKey, copyKey } = $props();

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

  const sendFailed =
    "Sorry, your message didn't send. Please try again, or call us at 519-654-6363.";

  function postToWeb3Forms(fields) {
    return fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(fields),
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    formData.isLoading = true;
    formData.errors = {};

    const fields = Object.fromEntries(new FormData(event.currentTarget));

    // Web3Forms charges for CC, so a copy goes out as a second submission
    // under its own key. Only the main submission decides success.
    if (copyKey) {
      postToWeb3Forms({ ...fields, access_key: copyKey }).catch((error) =>
        console.error("Copy submission error:", error),
      );
    }

    try {
      const response = await postToWeb3Forms(fields);
      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error("Form submission rejected:", result.message);
        formData.errors = { submit: sendFailed };
        return;
      }

      formData.submitted = true;
      formData.name = "";
      formData.email = "";
      formData.message = "";
    } catch (error) {
      console.error("Form submission error:", error);
      formData.errors = { submit: sendFailed };
    } finally {
      formData.isLoading = false;
    }
  }
</script>

<!-- Without JavaScript the form still posts straight to Web3Forms -->
<form
  class="space-y-6"
  action="https://api.web3forms.com/submit"
  method="POST"
  onsubmit={handleSubmit}
>
  <input type="hidden" name="access_key" value={accessKey} />
  <input
    type="hidden"
    name="subject"
    value="New message from the Feet on the Go website"
  />
  <input type="hidden" name="from_name" value="Feet on the Go website" />

  <!-- Add honeypot field for spam protection -->
  <input
    type="checkbox"
    name="botcheck"
    class="hidden"
    style="display: none;"
  />

  {#if formData.submitted}
    <div
      class="text-green-800 text-lg p-4 bg-green-50 border-2 border-green-200 rounded-lg"
      role="status"
    >
      Thank you for your message! We'll get back to you soon.
    </div>
  {/if}

  {#if formData.errors.submit}
    <div
      class="text-red-800 text-lg p-4 bg-red-50 border-2 border-red-200 rounded-lg"
      role="alert"
    >
      {formData.errors.submit}
    </div>
  {/if}

  <div>
    <label for="name" class="block text-lg sm:text-xl font-bold text-gray-900">
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
      class="mt-2 block w-full rounded-lg border-2 border-gray-400 px-4 py-3 text-lg focus:border-sky-700 focus:ring-sky-700
        {formData.errors.name ? 'border-red-500' : ''}"
      aria-invalid={formData.errors.name ? "true" : "false"}
    />
    {#if formData.errors.name}
      <p class="mt-2 text-red-700 text-base" role="alert">
        {formData.errors.name}
      </p>
    {/if}
  </div>

  <div>
    <label for="email" class="block text-lg sm:text-xl font-bold text-gray-900">
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
      class="mt-2 block w-full rounded-lg border-2 border-gray-400 px-4 py-3 text-lg focus:border-sky-700 focus:ring-sky-700
        {formData.errors.email ? 'border-red-500' : ''}"
      aria-invalid={formData.errors.email ? "true" : "false"}
    />
    {#if formData.errors.email}
      <p class="mt-2 text-red-700 text-base" role="alert">
        {formData.errors.email}
      </p>
    {/if}
  </div>

  <div>
    <label
      for="message"
      class="block text-lg sm:text-xl font-bold text-gray-900"
    >
      Message <span class="text-red-600">*</span>
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
      maxlength="1000"
      bind:value={formData.message}
      class="mt-2 block w-full rounded-lg border-2 border-gray-400 px-4 py-3 text-lg focus:border-sky-700 focus:ring-sky-700
        {formData.errors.message ? 'border-red-500' : ''}"
      aria-invalid={formData.errors.message ? "true" : "false"}
    ></textarea>
    {#if formData.errors.message}
      <p class="mt-2 text-red-700 text-base" role="alert">
        {formData.errors.message}
      </p>
    {/if}
    <p class="mt-2 text-base text-gray-700">
      {formData.message.length}/1000 characters
    </p>
  </div>

  <button
    type="submit"
    class="cta-button disabled:opacity-60 disabled:cursor-not-allowed"
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
