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
      image: "/images/nurse.jpg",
      imageAlt: "Nurse providing patient care",
    },
    {
      year: "The Inspiration",
      title: "A Need Identified",
      content:
        "During her community care nursing years, Kelly witnessed the severe consequences of neglected foot health, including chronic ulcers and complications leading to amputations. This experience sparked the vision for <strong>Feet On The Go</strong>.",
      image: "/images/foot-health.jpg",
      imageAlt: "Community healthcare setting",
    },
    {
      year: "Present Day",
      title: "Feet On The Go Today",
      content:
        "Now established in <strong>Kitchener-Waterloo</strong>, we provide professional mobile foot care services, emphasizing education and preventative care to help maintain our clients' mobility and quality of life.",
      image: "/images/at-home-care.png",
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
          <div class="content-wrapper">
            <div class="year-badge">{item.year}</div>
            <div class="content-box">
              <img
                src={item.image}
                alt={item.imageAlt}
                class="timeline-image"
              />
              <h3>{item.title}</h3>
              <p>{@html item.content}</p>
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
    @apply max-w-2xl mx-auto mt-4 px-4;
  }

  .timeline-grid {
    @apply space-y-8 sm:space-y-12 mt-8;
  }

  .timeline-item {
    @apply relative pb-8 sm:pb-12;
  }

  .content-wrapper {
    @apply flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center;
  }

  .year-badge {
    @apply bg-sky-100 text-sky-800 px-4 py-2 rounded-full font-semibold 
           text-sm sm:text-base w-auto sm:w-1/5 text-center;
  }

  .content-box {
    @apply bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-sky-100 flex-1;
  }

  .timeline-image {
    @apply w-full h-32 sm:h-80 object-cover rounded-lg mb-4;
  }

  .philosophy {
    @apply bg-sky-50 pb-28;
  }

  .large-text {
    @apply text-xl sm:text-2xl text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4;
  }

  .commitment-grid {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto px-4;
  }

  .commitment-item {
    @apply bg-white p-4 sm:p-6 rounded-lg shadow-md;
  }

  .commitment-item h3 {
    @apply text-lg sm:text-xl font-semibold mb-2 text-sky-800;
  }

  .commitment-item p {
    @apply text-sm sm:text-base;
  }

  @media (max-width: 640px) {
    .content-wrapper {
      @apply px-4;
    }

    .year-badge {
      @apply mb-2;
    }

    .timeline-image {
      @apply h-48;
    }
  }
</style>
