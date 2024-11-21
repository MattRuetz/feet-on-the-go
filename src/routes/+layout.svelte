<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    faBars,
    faXmark,
    faPhone,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
  import tempLogo from "$lib/images/temp_logo.png?enhanced";

  //   library.add(faBars, faXmark);

  let { children } = $props();

  // Add state for mobile menu
  let isMobileMenuOpen = $state(false);

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class="sticky top-0 bg-white z-50">
  <div class="narrow-container">
    <div
      class="flex items-center justify-between md:justify-center h-16 md:h-20"
    >
      <a href="tel:+15196546363" class="md:hidden mobile-cta-button"
        ><FontAwesomeIcon icon={faPhone} /> Call Now</a
      >
      <button
        class="md:hidden p-2"
        onclick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {#if isMobileMenuOpen}
          <FontAwesomeIcon icon={faXmark} class="text-xl" />
        {:else}
          <FontAwesomeIcon icon={faBars} class="text-xl" />
        {/if}
      </button>

      <nav class:open={isMobileMenuOpen}>
        <a
          href="/"
          class:active={$page.url.pathname === "/"}
          onclick={() => (isMobileMenuOpen = false)}>Home</a
        >
        <a
          href="/services"
          class:active={$page.url.pathname === "/services"}
          onclick={() => (isMobileMenuOpen = false)}>Services</a
        >
        <a
          href="/about"
          class:active={$page.url.pathname === "/about"}
          onclick={() => (isMobileMenuOpen = false)}>About</a
        >
        <a
          href="/nursing-foot-care"
          class:active={$page.url.pathname === "/nursing-foot-care"}
          onclick={() => (isMobileMenuOpen = false)}>Nursing Foot Care</a
        >
        <a
          class="contact-button"
          href="/contact"
          class:active={$page.url.pathname === "/contact"}
          onclick={() => (isMobileMenuOpen = false)}>Contact Us</a
        >
      </nav>
    </div>
  </div>
</header>

<main>
  {@render children()}
</main>

<footer>
  <div class="footer-content">
    <div class="footer-brand">
      <a href="/" class="footer-logo" aria-label="Feet on the Go Logo">
        <enhanced:img
          src={tempLogo}
          alt="Feet on the Go"
          sizes="(max-width: 640px) 64px, 256px"
          class="w-64 lg:w-auto"
        />
      </a>
      <p class="footer-tagline">
        Professional Foot Care Services in Kitchener, Waterloo, Cambridge,
        Woodstock, and Ayr
      </p>
    </div>

    <div class="footer-links">
      <h4>Quick Links</h4>
      <nav class="">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/nursing-foot-care">Nursing Foot Care</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>

    <div class="footer-contact">
      <h4>Contact Info</h4>
      <div class="contact-details">
        <a href="tel:+15196546363" class="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>519-654-6363</span>
        </a>
        <span class="location flex items-center space-x-2">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Kitchener-Waterloo, Ontario</span>
        </span>
      </div>
      <a href="/contact" class="footer-cta">Contact Us</a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© {new Date().getFullYear()} Feet on the Go</p>
    <p>
      Website made by <a
        href="https://mattruetz.com"
        target="_blank"
        rel="noopener noreferrer">Matt Ruetz</a
      >
    </p>
  </div>
</footer>

<style>
  header {
    @apply bg-gray-50 shadow border-b;
  }

  nav {
    @apply flex items-center space-x-6;
  }

  header nav a {
    @apply text-xl;
  }

  nav a {
    @apply text-gray-800 no-underline font-medium px-3 py-2 rounded-md 
		transition-colors hover:bg-gray-200 whitespace-nowrap border border-transparent;
  }

  nav a.active {
    @apply border border-sky-600 text-sky-600 rounded-md;
  }

  .contact-button {
    @apply bg-sky-600 text-white hover:bg-sky-700;
  }

  .contact-button.active {
    @apply bg-white text-sky-600;
  }

  main {
    @apply min-h-[calc(100vh-200px)];
  }

  footer {
    @apply bg-gray-50 py-16 px-4;
  }

  .footer-content {
    @apply container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12;
  }

  .footer-brand {
    @apply space-y-4;
  }

  .footer-tagline {
    @apply text-gray-600 text-base;
  }

  .footer-links {
    @apply space-y-4;
  }

  .footer-links h4 {
    @apply text-xl font-medium mb-4 text-center;
  }

  .footer-links nav {
    @apply flex flex-col space-y-2 text-start space-x-0;
  }

  .footer-links a {
    @apply text-gray-600 hover:text-sky-600 transition-colors;
  }

  .footer-contact {
    @apply space-y-4;
  }

  .footer-contact h4 {
    @apply text-xl font-medium mb-4;
  }

  .contact-details {
    @apply space-y-3;
  }

  .contact-details a {
    @apply text-gray-600 hover:text-sky-600 transition-colors;
  }

  .footer-cta {
    @apply inline-block mt-4 px-6 py-2 bg-sky-600 text-white rounded-md 
    hover:bg-sky-700 transition-colors;
  }

  .footer-bottom {
    @apply container mx-auto mt-12 pt-8 border-t border-gray-200 
    flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0;
  }

  .footer-bottom p {
    @apply text-gray-600 text-base;
  }

  .footer-bottom a {
    @apply text-sky-600 hover:text-sky-700 transition-colors;
  }

  @media (max-width: 768px) {
    header nav {
      @apply fixed top-16 px-8 left-0 right-0 flex-col items-center space-x-0 space-y-2 
        bg-gray-50 py-4 shadow-md translate-x-full transition-transform border-t border-gray-400;
    }

    /* Show menu when open */
    header nav.open {
      @apply translate-x-0;
    }

    nav a {
      @apply w-full text-center;
    }

    .contact-button {
      @apply w-full;
    }

    .footer-brand {
      @apply text-center flex flex-col items-center justify-center;
    }

    .footer-contact {
      @apply text-center;
    }
    .footer-contact a {
      @apply justify-center py-3 bg-gray-200 text-gray-600 rounded-md  transition-colors;
    }

    .location {
      @apply hidden;
    }

    .footer-contact a.footer-cta {
      @apply bg-sky-600 text-white w-full;
    }
  }
</style>
