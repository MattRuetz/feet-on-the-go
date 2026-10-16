<script>
  import "../app.css";
  import "@fontsource/atkinson-hyperlegible-next/latin-400.css";
  import "@fontsource/atkinson-hyperlegible-next/latin-700.css";
  import font400 from "@fontsource/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-400-normal.woff2?url";
  import font700 from "@fontsource/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-700-normal.woff2?url";
  import { page } from "$app/stores";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  // Ship Font Awesome's CSS with the page instead of injecting it after load,
  // which made the icons jump in size.
  import "@fortawesome/fontawesome-svg-core/styles.css";
  import { config } from "@fortawesome/fontawesome-svg-core";
  config.autoAddCss = false;
  import {
    faBars,
    faXmark,
    faPhone,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
  import tempLogo from "$lib/images/temp_logo.png?enhanced";

  let { children } = $props();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/history", label: "History" },
    { href: "/nursing-foot-care", label: "Nursing Foot Care" },
    { href: "/contact", label: "Contact Us" },
  ];

  let isMobileMenuOpen = $state(false);

  function closeMenuOnEscape(event) {
    if (event.key === "Escape") isMobileMenuOpen = false;
  }
</script>

<svelte:window onkeydown={closeMenuOnEscape} />

<svelte:head>
  <!-- Preload the body font so text doesn't reflow when it arrives -->
  <link
    rel="preload"
    href={font400}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={font700}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  {#if !$page.error}
    <link
      rel="canonical"
      href={`https://feetonthego.com${$page.url.pathname}`}
    />
  {/if}
</svelte:head>

<a href="#main" class="skip-link">Skip to main content</a>

<header>
  <div class="top-bar">
    <div class="header-container top-bar-inner">
      <p>
        Mobile nursing foot care in Kitchener, Waterloo, Cambridge, Woodstock
        and Ayr
      </p>
      <a href="tel:+15196546363" class="top-bar-phone">
        <FontAwesomeIcon icon={faPhone} />
        Call 519-654-6363
      </a>
    </div>
  </div>

  <div class="header-container nav-row">
    <a href="/" class="brand">
      <enhanced:img
        src={tempLogo}
        alt="Feet on the Go, home page"
        sizes="120px"
        class="brand-logo"
      />
    </a>

    <nav aria-label="Main" class="desktop-nav">
      {#each links as link}
        <a
          href={link.href}
          class:contact-link={link.href === "/contact"}
          aria-current={$page.url.pathname === link.href ? "page" : undefined}
          >{link.label}</a
        >
      {/each}
    </nav>

    <div class="mobile-actions">
      <a href="tel:+15196546363" class="mobile-call">
        <FontAwesomeIcon icon={faPhone} />
        Call
      </a>
      <button
        type="button"
        class="menu-button"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
      >
        {#if isMobileMenuOpen}
          <FontAwesomeIcon icon={faXmark} /> Close
        {:else}
          <FontAwesomeIcon icon={faBars} /> Menu
        {/if}
      </button>
    </div>
  </div>

  <nav
    id="mobile-menu"
    aria-label="Main"
    class="mobile-nav"
    hidden={!isMobileMenuOpen}
  >
    {#each links as link}
      <a
        href={link.href}
        aria-current={$page.url.pathname === link.href ? "page" : undefined}
        onclick={() => (isMobileMenuOpen = false)}>{link.label}</a
      >
    {/each}
    <a
      href="tel:+15196546363"
      class="mobile-nav-phone"
      onclick={() => (isMobileMenuOpen = false)}
    >
      <FontAwesomeIcon icon={faPhone} />
      Call 519-654-6363
    </a>
  </nav>
</header>

<main id="main" tabindex="-1">
  {@render children()}
</main>

<footer>
  <div class="footer-content">
    <div class="footer-brand">
      <a href="/" class="footer-logo">
        <enhanced:img
          src={tempLogo}
          alt="Feet on the Go, home page"
          sizes="200px"
          class="w-48"
        />
      </a>
      <p class="footer-tagline">
        Nursing foot care in your home in Kitchener, Waterloo, Cambridge,
        Woodstock and Ayr.
      </p>
    </div>

    <div class="footer-links">
      <p class="footer-heading">Pages</p>
      <nav aria-label="Footer">
        {#each links as link}
          <a href={link.href}>{link.label}</a>
        {/each}
      </nav>
    </div>

    <div class="footer-contact">
      <p class="footer-heading">Contact</p>
      <div class="contact-details">
        <a href="tel:+15196546363" class="footer-phone">
          <FontAwesomeIcon icon={faPhone} />
          <span>519-654-6363</span>
        </a>
        <p class="footer-area">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Kitchener, Waterloo, Cambridge, Woodstock and Ayr</span>
        </p>
      </div>
      <a href="/contact" class="cta-button">Send a Message</a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>
      © {new Date().getFullYear()} Feet on the Go ·
      <a href="/privacy">Privacy</a> ·
      <a href="/terms">Terms</a>
    </p>
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
  .skip-link {
    @apply sr-only;
  }

  .skip-link:focus {
    @apply not-sr-only fixed top-2 left-2 z-[60] bg-white text-sky-800 font-bold px-4 py-3 rounded-lg shadow-lg;
  }

  header {
    @apply sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm;
  }

  .header-container {
    @apply max-w-6xl mx-auto px-4;
  }

  .top-bar {
    @apply hidden lg:block bg-sky-800 text-white;
  }

  .top-bar-inner {
    @apply flex items-center justify-between gap-6 py-2;
  }

  .top-bar p {
    @apply text-base text-white;
  }

  .top-bar-phone {
    @apply flex items-center gap-2 text-lg font-bold text-white no-underline hover:underline underline-offset-4 whitespace-nowrap;
  }

  .nav-row {
    @apply flex items-center justify-between gap-4 h-[4.5rem] lg:h-20;
  }

  .brand {
    @apply shrink-0 rounded-md;
  }

  .brand :global(.brand-logo) {
    @apply h-14 lg:h-[4.25rem] w-auto;
  }

  .desktop-nav {
    @apply hidden lg:flex items-center gap-1;
  }

  .desktop-nav a {
    @apply text-lg font-bold text-gray-800 no-underline px-3 py-2 rounded-md border-2 border-transparent transition-colors hover:bg-sky-50 hover:text-sky-800 whitespace-nowrap;
  }

  .desktop-nav a[aria-current="page"] {
    @apply text-sky-800 border-sky-700;
  }

  .desktop-nav a.contact-link {
    @apply ml-2 bg-sky-700 text-white hover:bg-sky-800 hover:text-white;
  }

  .desktop-nav a.contact-link[aria-current="page"] {
    @apply bg-white text-sky-800;
  }

  .mobile-actions {
    @apply flex lg:hidden items-center gap-2;
  }

  .mobile-call,
  .menu-button {
    @apply flex items-center gap-2 min-h-[3rem] px-4 rounded-lg text-lg font-bold;
  }

  .mobile-call {
    @apply bg-sky-700 text-white no-underline;
  }

  .menu-button {
    @apply border-2 border-gray-300 text-gray-900 bg-white;
  }

  .mobile-nav {
    @apply lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-1 max-h-[calc(100vh-4.5rem)] overflow-y-auto;
  }

  .mobile-nav[hidden] {
    @apply hidden;
  }

  .mobile-nav a {
    @apply flex items-center gap-3 text-xl font-bold text-gray-900 no-underline px-4 py-3 rounded-lg hover:bg-sky-50;
  }

  .mobile-nav a[aria-current="page"] {
    @apply bg-sky-50 text-sky-800;
  }

  .mobile-nav a.mobile-nav-phone {
    @apply mt-2 justify-center bg-sky-700 text-white hover:bg-sky-800;
  }

  main {
    @apply min-h-[60vh] outline-none;
  }

  footer {
    @apply bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-4;
  }

  .footer-content {
    @apply max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left;
  }

  .footer-brand {
    @apply space-y-4 flex flex-col items-center md:items-start;
  }

  .footer-logo {
    @apply rounded-md;
  }

  .footer-tagline {
    @apply text-gray-700 text-lg;
  }

  .footer-heading {
    @apply text-xl font-bold text-gray-900 mb-4;
  }

  .footer-links nav {
    @apply flex flex-col items-center md:items-start gap-1;
  }

  .footer-links a {
    @apply text-lg text-gray-800 py-1 hover:text-sky-800 hover:underline underline-offset-4;
  }

  .contact-details {
    @apply space-y-3 mb-6;
  }

  .footer-phone {
    @apply flex items-center justify-center md:justify-start gap-3 text-xl font-bold text-gray-900 hover:text-sky-800;
  }

  .footer-area {
    @apply flex items-start justify-center md:justify-start gap-3 text-lg text-gray-700;
  }

  .footer-area :global(svg) {
    @apply mt-1.5 shrink-0;
  }

  .footer-bottom {
    @apply max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center;
  }

  .footer-bottom p {
    @apply text-gray-700 text-base;
  }
</style>
