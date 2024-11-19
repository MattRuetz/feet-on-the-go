<script>
  import { fade } from "svelte/transition";
  import { inview } from "$lib/actions";
  import CTASection from "$lib/components/CTASection.svelte";
  import nurse from "$lib/images/nurse.jpg?enhanced";
</script>

<svelte:head>
  <title>About - Feet on the Go</title>
  <meta
    name="description"
    content="Meet Kelly Ferreira, RPN and owner of Feet on the Go. Providing professional nursing foot care services in Kitchener-Waterloo with over 10 years of experience."
  />
</svelte:head>

<section class="hero">
  <div class="narrow-container">
    <h1>About Us</h1>
    <div class="minimal-divider"></div>
    <p class="hero-text">
      Meet <strong>Kelly Ferreira, RPN</strong> - Owner of Feet On The Go, bringing
      professional foot care directly to you.
    </p>
  </div>
</section>

<section class="about">
  <div class="narrow-container">
    <div class="about-content" use:inview in:fade>
      <enhanced:img
        src={nurse}
        alt="Kelly Ferreira, RPN"
        class="about-image"
        sizes="(max-width: 640px) 640px, 1280px"
      />
      <div class="content-box">
        <h2>My Story</h2>
        <p>
          Hi, I'm Kelly Ferreira, owner of Feet On The Go. With a decade of
          experience as a Registered Practical Nurse, I've developed expertise
          in both basic and advanced foot care, along with specialized
          experience in Alzheimer's/dementia care and leg/foot wound management.
        </p>
        <p>
          During my years in community care nursing, I witnessed firsthand the
          severe consequences of neglected foot health - from serious ulcers to
          gangrene and even amputations. These experiences shaped my mission at
          Feet On The Go.
        </p>
        <p class="mission-statement">
          My goal is to provide professional nursing foot care while educating
          clients on proper foot care practices and early warning signs of
          disease.
        </p>
        <p class="signature">
          Let's keep your <strong>feet on the go!</strong>
        </p>
        <p class="signature-name">Kelly Ferreira, RPN</p>
      </div>
    </div>
  </div>
</section>

<section class="expertise">
  <div class="narrow-container">
    <h2>Our Expertise</h2>
    <div class="expertise-grid">
      <div class="expertise-item">
        <h3>Nursing Care</h3>
        <p>Registered Practical Nurse with advanced foot care experience</p>
      </div>
      <div class="expertise-item">
        <h3>Specialized Care</h3>
        <p>Experience with Alzheimer's/dementia patients and wound care</p>
      </div>
      <div class="expertise-item">
        <h3>Education</h3>
        <p>Focus on preventative care and client education</p>
      </div>
      <div class="expertise-item">
        <h3>Convenience</h3>
        <p>Professional care brought directly to your doorstep</p>
      </div>
    </div>
  </div>
</section>

<CTASection />

<style>
  .hero {
    @apply bg-sky-50 text-center;
  }

  .hero-text {
    @apply max-w-2xl mx-auto mt-4 px-4;
  }

  .about {
    @apply py-16;
  }

  .about-content {
    @apply grid grid-cols-1 md:grid-cols-3 gap-8; /* Changed to 2 columns for better responsiveness */
  }

  .about-image {
    @apply col-span-1 h-[300px] lg:h-[500px] object-cover rounded-lg shadow-lg; /* Adjusted to span 1 column */
  }

  .content-box {
    @apply col-span-2 space-y-6 bg-white p-8 rounded-lg shadow-lg border-2 border-sky-100; /* Adjusted to span 1 column */
  }

  .mission-statement {
    @apply text-lg font-medium text-sky-800 mt-6;
  }

  .signature {
    @apply text-lg italic mt-8;
  }

  .signature-name {
    @apply text-xl font-semibold text-sky-800 mt-2;
  }

  .expertise {
    @apply bg-sky-50 pb-28;
  }

  .expertise-grid {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8;
  }

  .expertise-item {
    @apply bg-white p-6 rounded-lg shadow-md;
  }

  .expertise-item h3 {
    @apply text-xl font-semibold mb-2 text-sky-800;
  }
</style>
