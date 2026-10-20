<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

  let { data } = $props();
</script>

<svelte:head>
  <title>Book a Foot Care Visit | Feet on the Go</title>
  <meta
    name="description"
    content="Contact Feet on the Go for professional mobile foot care services in Kitchener, Waterloo, Cambridge, Woodstock, and Ayr. Book an appointment today."
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
  <div class="contact-grid">
    <div class="contact-details">
      <h2>Call Us</h2>
      <p>Call to book an appointment or ask a question.</p>
      <a href="tel:+15196546363" class="cta-button phone-button">
        <FontAwesomeIcon icon={faPhone} />
        519-654-6363
      </a>
      <h2>Areas We Serve</h2>
      <p class="service-area">
        <FontAwesomeIcon icon={faLocationDot} class="area-icon" />
        <span>Kitchener, Waterloo, Cambridge, Woodstock and Ayr</span>
      </p>
    </div>

    <div class="contact-form">
      <h2>Send a Message</h2>
      <ContactForm
        accessKey={data.web3formsKey}
        copyKey={data.web3formsCopyKey}
      />
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

  .contact-grid {
    @apply max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start;
  }

  .contact-details h2,
  .contact-form h2 {
    @apply text-left mb-3;
  }

  .contact-details p {
    @apply mb-6;
  }

  .phone-button {
    @apply text-2xl mb-12;
  }

  .service-area {
    @apply flex items-start gap-3;
  }

  .service-area :global(.area-icon) {
    @apply text-sky-700 mt-1.5 shrink-0;
  }

  .contact-form {
    @apply bg-gray-50 border-2 border-gray-200 rounded-xl p-5 sm:p-8;
  }
</style>
