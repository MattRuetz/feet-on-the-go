<script>
  import { page } from "$app/stores";

  // Map common error codes to user-friendly messages
  const errorMessages = {
    404: "We're sorry, but we couldn't find the page you were looking for.",
    500: "An internal server error occurred. Our team has been notified.",
    403: "You don't have permission to access this resource.",
    401: "Please log in to access this page.",
  };

  // Get user-friendly message or use generic message
  const errorMessage = $state(
    errorMessages[$page.status] || "An unexpected error occurred.",
  );
</script>

<div class="error-container">
  <h1>{$page.status} Error</h1>

  <div class="message">
    <p>{errorMessage}</p>
    {#if $page.error?.message && $page.status !== 404}
      <p class="technical-details">Technical details: {$page.error.message}</p>
    {/if}

    <p>Would you like to:</p>

    <div class="options">
      <a href="/" class="button">Return to Home Page</a>
      {#if $page.status >= 500}
        <a href="/contact" class="button">Report this Problem</a>
      {:else}
        <a href="/contact" class="button">Contact Us for Help</a>
      {/if}
    </div>
  </div>
</div>

<style>
  .error-container {
    text-align: center;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
  }

  .message {
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 2rem 0;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    align-items: center;
  }

  .button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.2rem;
    min-width: 250px;
    transition: background-color 0.2s;
  }

  .button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    .error-container {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .message {
      font-size: 1.1rem;
    }
  }

  .technical-details {
    font-size: 0.9rem;
    color: #666;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 4px;
    margin: 1rem 0;
  }
</style>
