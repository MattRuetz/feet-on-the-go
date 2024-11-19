<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { inview } from "$lib/actions";

  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faStar } from "@fortawesome/free-solid-svg-icons";

  let reviews = $state([]);

  let mounted = $state(false);
  let reviewVisibility = $state([]);

  onMount(async () => {
    const response = await fetch("/reviews.json");
    reviews = await response.json();
    reviewVisibility = reviews.map(() => false);
    mounted = true;
  });

  function handleInView(i) {
    console.log(`Review ${i} is in view`);
    reviewVisibility[i] = true;
  }
</script>

{#if reviews.length > 0 && mounted}
  <section class="reviews" in:fade={{ duration: 800 }}>
    <div class="container mx-auto">
      <h2>What Our Clients Say</h2>
      <div class="minimal-divider"></div>

      <div class="reviews-grid">
        {#each reviews as review, i}
          <div
            class="grid-item"
            use:inview={{
              threshold: 0.3,
              onenter: () => setTimeout(() => handleInView(i), i * 200),
            }}
          >
            <div
              class="review-card"
              transition:fade={{ duration: 300 }}
              class:visible={reviewVisibility[i]}
            >
              <p class="review-text">"{review.review}"</p>
              <div class="stars mb-4">
                {#each Array(review.stars).fill(0) as _}
                  <FontAwesomeIcon icon={faStar} class="text-yellow-500" />
                {/each}
                {review.stars} / 5
              </div>
              <div class="review-meta">
                <p class="reviewer-name">- {review.name}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  .reviews {
    @apply pb-24 bg-gradient-to-b from-sky-50 to-white;
  }

  .reviews-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12;
  }

  .review-card {
    @apply bg-white p-6 rounded-lg shadow shadow-gray-300 opacity-0 translate-y-4 transition-all duration-500;
  }

  .review-card.visible {
    @apply opacity-100 translate-y-0;
  }

  .review-text {
    @apply text-lg italic mb-6;
  }

  .review-meta {
    @apply mt-auto;
  }

  .reviewer-name {
    @apply font-semibold text-lg text-sky-800;
  }
</style>
