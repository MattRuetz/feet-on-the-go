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

  //   function formatDate(dateString) {
  //     const date = new Date(dateString);
  //     const now = new Date();
  //     const diffTime = Math.abs(now - date);
  //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //     if (diffDays === 1) return "yesterday";
  //     if (diffDays < 7) return `${diffDays} days ago`;
  //     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  //     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  //     return date.toLocaleDateString();
  //   }

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
              threshold: 0.9,
              onenter: () => setTimeout(() => handleInView(i), i * 200),
            }}
          >
            {#if reviewVisibility[i]}
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
                  <!-- <p class="review-date">
                  {formatDate(review.date)}
                  </p> -->
                </div>
              </div>
            {/if}
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
    @apply bg-white p-6 rounded-lg shadow-lg shadow-gray-200;
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

  .review-date {
    @apply text-sm text-gray-600 mt-1;
  }
</style>
