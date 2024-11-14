<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { inview } from "$lib/actions";
  import CTASection from "$lib/components/CTASection.svelte";
  const timelineItems = [
    {
      year: "Early Career",
      title: "The Foundation",
      content:
        "Kelly Ferreira began her journey as a <strong>Registered Practical Nurse (RPN)</strong>, developing expertise in advanced foot care, Alzheimer's care, and wound management <strong>over a decade of dedicated service</strong>.",
      image: "/images/nurse-caring.jpg",
      imageAlt: "Nurse providing patient care",
    },
    {
      year: "The Inspiration",
      title: "A Need Identified",
      content:
        "During her community care nursing years, Kelly witnessed the severe consequences of neglected foot health, including chronic ulcers and complications leading to amputations. This experience sparked the vision for Feet On The Go.",
      image: "/images/community-care.jpg",
      imageAlt: "Community healthcare setting",
    },
    {
      year: "Present Day",
      title: "Feet On The Go Today",
      content:
        "Now established in Kitchener-Waterloo, we provide professional mobile foot care services, emphasizing education and preventative care to help maintain our clients' mobility and quality of life.",
      image: "/images/mobile-care.jpg",
      imageAlt: "Mobile foot care service",
    },
  ];
</script>

<svelte:head>
  <title>Our History - Feet on the Go</title>
  <meta
    name="description"
    content="Learn about the history of Feet on the Go and our commitment to providing quality foot care in Kitchener-Waterloo."
  />
</svelte:head>

<section class="hero">
  <div class="narrow-container">
    <h1>Our History</h1>
    <div class="minimal-divider"></div>
    <p class="hero-text">
      Meet <strong>Kelly Ferreira, RPN</strong> - Founder of Feet On The Go, and
      discover our commitment to revolutionizing foot care in Kitchener-Waterloo.
    </p>
  </div>
</section>

<section class="timeline">
  <div class="narrow-container">
    <h2>Our Journey</h2>
    <div class="timeline-grid">
      {#each timelineItems as item, i}
        <div class="timeline-item" use:inview transition:fade>
          <div class="content-wrapper left">
            <div class="year-badge w-1/5 text-center">{item.year}</div>
            <div class="content-box">
              <img
                src={item.image}
                alt={item.imageAlt}
                class="timeline-image"
              />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="philosophy">
  <div class="narrow-container">
    <h2>Our Philosophy</h2>
    <div class="philosophy-content">
      <p class="large-text">
        We believe that healthy feet are the foundation of an active, fulfilling
        life.
      </p>
      <div class="commitment-grid">
        <div class="commitment-item">
          <h3>Expertise</h3>
          <p>Led by a certified RPN with advanced foot care training</p>
        </div>
        <div class="commitment-item">
          <h3>Personalized Care</h3>
          <p>Tailored services for your unique foot health needs</p>
        </div>
        <div class="commitment-item">
          <h3>Convenience</h3>
          <p>Professional care brought directly to your doorstep</p>
        </div>
        <div class="commitment-item">
          <h3>Prevention</h3>
          <p>Focus on education and early intervention</p>
        </div>
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
    @apply max-w-2xl mx-auto mt-4;
  }

  .timeline-grid {
    @apply space-y-12 mt-8;
  }

  .timeline-item {
    @apply relative pb-12;
  }

  .content-wrapper {
    @apply flex gap-8 items-center;
  }

  .year-badge {
    @apply bg-sky-100 text-sky-800 px-4 py-2 rounded-full font-semibold;
  }

  .content-box {
    @apply bg-white p-6 rounded-lg shadow border-2 border-sky-100 flex-1;
  }

  .timeline-image {
    @apply w-full h-48 object-cover rounded-lg mb-4;
  }

  .philosophy {
    @apply bg-sky-50 py-16;
  }

  .large-text {
    @apply text-2xl text-center mb-12 max-w-2xl mx-auto;
  }

  .commitment-grid {
    @apply grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto;
  }

  .commitment-item {
    @apply bg-white p-6 rounded-lg shadow-md;
  }

  .commitment-item h3 {
    @apply text-xl font-semibold mb-2 text-sky-800;
  }
</style>
