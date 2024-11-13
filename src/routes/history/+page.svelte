<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { inview } from "$lib/actions";
</script>

<svelte:head>
  <title>Our History - Feet on the Go</title>
  <meta
    name="description"
    content="Learn about the history of Feet on the Go and our commitment to providing quality foot care in Kitchener-Waterloo."
  />
</svelte:head>

<section class="hero">
  <div class="narrow-container">
    <h1>Our History</h1>
    <div class="minimal-divider"></div>
    <p class="hero-text">
      Discover the story behind Feet on the Go and our dedication to foot care
      excellence.
    </p>
  </div>
</section>

<section class="timeline">
  <div class="narrow-container">
    <h2>Our Journey</h2>
    <div class="timeline-grid">
      <!-- Timeline items will go here -->
    </div>
  </div>
</section>

<style>
  .hero {
    @apply bg-sky-50 text-center;
  }

  .hero-text {
    @apply max-w-2xl mx-auto mt-4;
  }

  .timeline-grid {
    @apply space-y-12 mt-8;
  }
</style>
