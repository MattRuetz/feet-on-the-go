<script>
  import {
    faPhone,
    faLocationDot,
    faClock,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import elderlyCouple2 from "$lib/images/elderly-couple2.jpg?enhanced";
</script>

<section class="cta">
  <div class="cta-background">
    <enhanced:img
      src={elderlyCouple2}
      alt=""
      class="background-image"
      sizes="100vw"
    />
  </div>
  <div class="cta-background-overlay"></div>
  <div class="cta-content space-y-8 narrow-container">
    <h2>Book Your Foot Care Appointment Today</h2>
    <div class="minimal-divider"></div>
    <p class="cta-text mt-4">
      Don't let foot problems impact your quality of life. Take the first step
      towards healthier, happier feet!
    </p>
    <div class="contact-info">
      <p class="phone">
        <FontAwesomeIcon icon={faPhone} class="fa-sm mr-2" /> Call us at
        <a href="tel:519-654-6363">519-654-6363</a>
      </p>
    </div>
    <a href="/contact" class="cta-button">Schedule Your Appointment</a>
  </div>
</section>

<style>
  .contact-info {
    @apply my-8 space-y-4;
  }

  .phone {
    @apply text-xl font-semibold;
  }

  .phone a {
    @apply text-sky-700 hover:text-sky-800;
  }

  .cta {
    @apply relative;
  }

  .cta-background {
    @apply absolute inset-0 overflow-hidden -z-10;
  }

  .background-image {
    @apply w-full h-full object-cover object-bottom;
  }

  .cta-background-overlay {
    @apply absolute inset-0 bg-black/20 z-10;
  }

  .cta-content {
    @apply relative z-20 text-center bg-white p-16 rounded-lg;
  }
</style>
