<script>
  import { page } from "$app/stores";

  const errorMessages = {
    404: "Sorry, we couldn't find the page you were looking for.",
    500: "Sorry, something went wrong on our end.",
  };

  let errorMessage = $derived(
    errorMessages[$page.status] || "Sorry, something went wrong.",
  );
</script>

<svelte:head>
  <title
    >{$page.status === 404 ? "Page Not Found" : "Error"} | Feet on the Go</title
  >
</svelte:head>

<section>
  <div class="error-container">
    <h1>{$page.status === 404 ? "Page not found" : "Something went wrong"}</h1>
    <p>{errorMessage}</p>
    {#if $page.error?.message && $page.status !== 404}
      <p class="technical-details">Technical details: {$page.error.message}</p>
    {/if}
    <p>
      You can call us at <a href="tel:+15196546363">519-654-6363</a>, or use one
      of these links:
    </p>
    <div class="options">
      <a href="/" class="cta-button">Go to the Home Page</a>
      <a href="/contact" class="outline-btn">Contact Us</a>
    </div>
  </div>
</section>

<style>
  .error-container {
    @apply max-w-2xl mx-auto text-center space-y-6;
  }

  .technical-details {
    @apply text-base text-gray-700 bg-gray-100 rounded-lg p-4;
  }

  .options {
    @apply flex flex-col sm:flex-row justify-center gap-4 pt-4;
  }
</style>
