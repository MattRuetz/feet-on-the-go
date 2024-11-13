<script>
  import { enhance } from "$app/forms";

  let formData = $state({
    name: "",
    email: "",
    message: "",
    submitted: false,
    error: "",
    isLoading: false,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      formData.error = "Please fill in all fields";
      return;
    }

    formData.isLoading = true;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      formData = {
        ...formData,
        submitted: true,
        error: "",
        name: "",
        email: "",
        message: "",
        isLoading: false,
      };
    } catch (err) {
      console.error("Error:", err);
      formData.error = "Failed to send message. Please try again.";
      formData.isLoading = false;
    }
  }
</script>

<form onsubmit={handleSubmit} class="space-y-4" use:enhance>
  {#if formData.submitted}
    <div class="text-green-600 p-4 bg-green-50 rounded">
      Thank you for your message! We'll get back to you soon.
    </div>
  {/if}

  {#if formData.error}
    <div class="text-red-600 p-4 bg-red-50 rounded">
      {formData.error}
    </div>
  {/if}

  <div>
    <label for="name" class="block text-sm font-medium text-gray-700"
      >Name</label
    >
    <input
      type="text"
      id="name"
      name="name"
      autocomplete="name"
      bind:value={formData.name}
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Email</label
    >
    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      bind:value={formData.email}
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-700"
      >Message</label
    >
    <textarea
      id="message"
      name="message"
      rows="4"
      bind:value={formData.message}
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    ></textarea>
  </div>

  <button
    type="submit"
    class="inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    disabled={formData.isLoading}
  >
    {#if formData.isLoading}
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
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
