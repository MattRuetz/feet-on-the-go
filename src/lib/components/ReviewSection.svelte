<script>
  import reviews from "$lib/data/reviews.json";

  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faStar } from "@fortawesome/free-solid-svg-icons";
</script>

{#if reviews.length > 0}
  <section class="reviews">
    <div class="max-w-6xl mx-auto">
      <h2>What Our Clients Say</h2>
      <div class="minimal-divider"></div>

      <ul class="reviews-grid">
        {#each reviews as review}
          <li>
            <figure class="review-card">
              <p class="stars">
                <span class="sr-only">{review.stars} out of 5 stars</span>
                {#each Array(review.stars) as _}
                  <FontAwesomeIcon icon={faStar} />
                {/each}
              </p>
              <blockquote>
                <p class="review-text">"{review.review}"</p>
              </blockquote>
              <figcaption class="reviewer-name">{review.name}</figcaption>
            </figure>
          </li>
        {/each}
      </ul>
    </div>
  </section>
{/if}

<style>
  .reviews {
    @apply bg-sky-50;
  }

  .reviews-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12;
  }

  .review-card {
    @apply h-full flex flex-col bg-white p-6 sm:p-8 rounded-xl border-2 border-sky-100;
  }

  .stars {
    @apply flex gap-1 text-amber-500 text-xl mb-4;
  }

  .review-text {
    @apply text-gray-900 mb-6;
  }

  .reviewer-name {
    @apply mt-auto font-bold text-lg text-sky-800;
  }
</style>
