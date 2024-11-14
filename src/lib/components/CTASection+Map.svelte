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
      <p>Or visit us at our clinic location every Wednesday (9 AM - 4 PM):</p>
      <div class="clinic-location grid grid-cols-1 md:grid-cols-5 gap-4">
        <div class="clinic-location-card col-span-2 space-y-3">
          <h3>Clinic Location:</h3>
          <p class="font-bold">Elite Training Facility</p>
          <p class="italic text-sm">
            <FontAwesomeIcon icon={faLocationDot} class="fa-sm mr-2" />
            842 Victoria St. N., Kitchener, ON
          </p>
          <p class="font-semibold text-sm">
            <FontAwesomeIcon icon={faClock} class="fa-sm mr-2" />
            Every Wednesday from 9 AM - 4 PM
          </p>
          <div class="flex justify-center">
            <a
              href="https://goo.gl/maps/ZkgsBwQvfGGyUaRc7"
              target="_blank"
              class="text-sky-600 hover:text-sky-700">Get Directions</a
            >
          </div>
        </div>
        <!-- Google map embed -->
        <div class="col-span-3 rounded-lg overflow-hidden md:mt-0 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46333.253787650654!2d-80.5015662!3d43.4641804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4db29fb6851%3A0x48d18e51a7ba00!2sElite%20Training%20Facility!5e0!3m2!1sen!2sca!4v1731536168448!5m2!1sen!2sca"
            width="600"
            height="240"
            title="Elite Training Facility"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
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

  .clinic-location-card {
    @apply p-6 bg-gray-50 rounded-lg inline-block;
  }

  .clinic-location-card h3 {
    @apply text-xl mb-2;
  }

  .clinic-location-card p {
    @apply text-gray-600;
  }

  .cta-section {
    background-image: url("/images/foot-care.png");
    @apply bg-cover bg-center bg-no-repeat;
  }

  .cta-text {
    @apply text-xl text-gray-600 max-w-2xl mx-auto mb-8;
  }
</style>
