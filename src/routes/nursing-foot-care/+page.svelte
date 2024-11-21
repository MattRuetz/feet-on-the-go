<script>
  import CTASection from "$lib/components/CTASection.svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faCheck } from "@fortawesome/free-solid-svg-icons";

  const dailyChecks = [
    "Dry skin",
    "Breaks or lesions in the skin",
    "Calluses",
    "Inflammation around the toenails",
    "Blisters or bruises",
    "Swelling",
  ];
</script>

<svelte:head>
  <title>Nursing Foot Care Guide - Feet on the Go</title>
  <meta
    name="description"
    content="Learn essential foot care tips and practices for maintaining healthy feet. Expert advice from Feet on the Go's nursing professionals."
  />
</svelte:head>

<section class="hero">
  <div class="narrow-container">
    <h1>Nursing Foot Care Guide</h1>
    <div class="minimal-divider"></div>
    <p class="hero-text">
      Proper foot care is an integral part of leading a healthy, happy
      lifestyle. <strong>Learn how to maintain healthy feet</strong> with our professional
      guidance.
    </p>
  </div>
</section>

<section class="care-steps">
  <div class="narrow-container">
    <div class="care-card">
      <h2>Daily Foot Examination</h2>
      <p class="text-lg text-gray-600 mb-6">
        The first step is identifying problems before they become serious.
        Examine your feet daily in good lighting conditions and watch for:
      </p>
      <ul class="check-list">
        {#each dailyChecks as check}
          <li>
            <FontAwesomeIcon icon={faCheck} class="text-sky-600" />
            <span>{check}</span>
          </li>
        {/each}
      </ul>
      <p class="mt-6 text-gray-600">
        Identifying these issues early allows professionals like Feet on the Go
        to address problems before they become serious. As with anything, the
        sooner it is caught, the easier it is to treat.
      </p>
    </div>

    <div class="care-card">
      <h2>Washing and Moisturizing</h2>
      <ul class="instruction-list">
        <li>Wash your feet daily (soaking not recommended as it dries skin)</li>
        <li>Dry completely, especially between toes</li>
        <li>Apply unscented cream on tops and bottoms (avoid between toes)</li>
        <li>Wear clean, dry cotton socks daily</li>
        <li>Avoid socks with tight elastic tops</li>
      </ul>
    </div>

    <div class="care-card">
      <h2>Stay Active</h2>
      <p class="text-lg text-gray-600">
        Walking provides multiple benefits for foot health:
      </p>
      <ul class="benefit-list">
        <li>Improves circulation</li>
        <li>Reduces risk of blood clots</li>
        <li>Maintains muscle strength</li>
        <li>Improves balance and prevents falls</li>
      </ul>
    </div>
  </div>
</section>

<CTASection />

<style>
  .hero {
    @apply bg-sky-50 text-center;
  }

  .hero-text {
    @apply max-w-2xl mx-auto mt-4;
  }

  .care-card {
    @apply bg-white rounded-lg shadow p-8 mb-12 border-2 border-sky-100;
  }

  .check-list {
    @apply space-y-3;
  }

  .check-list li {
    @apply flex items-center space-x-3 text-lg;
  }

  .instruction-list {
    @apply space-y-3 list-disc pl-6 text-lg text-gray-600;
  }

  .benefit-list {
    @apply mt-4 space-y-2 list-disc pl-6 text-lg text-gray-600;
  }

  h2 {
    @apply text-2xl md:text-3xl mb-6 text-left;
  }

  h3 {
    @apply text-xl text-sky-800;
  }
</style>
