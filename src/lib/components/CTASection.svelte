<script>
  import {
    faPhone,
    faLocationDot,
    faClock,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
</script>

<section class="cta-section">
  <div class="narrow-container text-center bg-white p-16 rounded-lg shadow-lg">
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
    @apply text-sky-600 hover:text-sky-700;
  }

  .cta-section {
    background-image: url("/images/elderly-couple2.jpg");
    @apply bg-cover bg-left-bottom bg-no-repeat;
  }

  .cta-text {
    @apply text-xl text-gray-600 max-w-2xl mx-auto mb-8;
  }
</style>
