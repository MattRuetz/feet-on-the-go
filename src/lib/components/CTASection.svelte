<script>
  import { faPhone } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import elderlyCouple2 from "$lib/images/elderly-couple2.jpg?enhanced";
</script>

<section class="cta">
  <enhanced:img
    src={elderlyCouple2}
    alt=""
    class="background-image"
    sizes="100vw"
  />
  <div class="cta-content narrow-container">
    <h2>Book Your Foot Care Appointment Today</h2>
    <div class="minimal-divider"></div>
    <p class="cta-text">
      Don't let foot problems impact your quality of life. Take the first step
      towards healthier, happier feet!
    </p>
    <div class="cta-actions">
      <a href="tel:+15196546363" class="cta-button">
        <FontAwesomeIcon icon={faPhone} />
        <span class="whitespace-nowrap">Call 519-654-6363</span>
      </a>
      <a href="/contact" class="outline-btn">Schedule Your Appointment</a>
    </div>
  </div>
</section>

<style>
  .cta {
    @apply relative isolate overflow-hidden py-16 sm:py-24;
  }

  .cta :global(.background-image) {
    @apply absolute inset-0 -z-10 w-full h-full object-cover object-bottom;
  }

  .cta-content {
    @apply relative text-center bg-white rounded-xl shadow-lg px-6 py-10 sm:px-12 sm:py-14 max-w-3xl space-y-6;
  }

  .cta-content h2 {
    @apply mb-0;
  }

  .cta-actions {
    @apply flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 pt-2;
  }

  .cta-actions a {
    @apply sm:whitespace-nowrap;
  }
</style>
