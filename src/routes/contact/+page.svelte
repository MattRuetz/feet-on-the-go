<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { inview } from "$lib/actions";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
  <title>Contact Us - Feet on the Go</title>
  <meta
    name="description"
    content="Contact Feet on the Go for professional mobile foot care services in Kitchener-Waterloo. Book an appointment today."
  />
</svelte:head>

<section class="hero">
  <div class="narrow-container">
    <h1>Contact Us</h1>
    <div class="minimal-divider"></div>
    <p class="hero-text">
      Get in touch with us to schedule an appointment or learn more about our
      services.
    </p>
  </div>
</section>

<section class="contact-info">
  <div class="narrow-container grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="contact-details">
      <h2>Get In Touch</h2>
      <div class="space-y-4">
        <a href="tel:+15196546363" class="contact-link">
          <FontAwesomeIcon icon={faPhone} />
          <span>519-654-6363</span>
        </a>
        <div class="contact-link">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Kitchener-Waterloo, Ontario</span>
        </div>
      </div>
    </div>

    <div class="contact-form">
      <h2>Send a Message</h2>
      <ContactForm />
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

  .contact-link {
    @apply flex items-center space-x-4 text-xl hover:text-sky-600 transition-colors;
  }
</style>
