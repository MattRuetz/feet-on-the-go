<script>
  // Import any needed images later
  const services = [
    { title: 'Foot Care', description: 'Professional foot care services' },
    { title: 'Home Visits', description: 'Convenient care in your home' },
    { title: 'Diabetic Care', description: 'Specialized diabetic foot care' }
  ];
</script>

<svelte:head>
  <title>Feet on the Go - Professional Mobile Foot Care Services</title>
  <meta name="description" content="Professional mobile foot care services in Kitchener-Waterloo. Specializing in senior care, diabetic foot care, and home visits." />
</svelte:head>

<section class="hero relative">
  <div class="hero-content max-w-5xl px-8 mx-auto h-full relative z-10">
    <div class="hero-text w-1/2 h-full flex flex-col items-start justify-center space-y-8">
      <h1 class="text-gray-800">Professional Foot Care in Your Home</h1>
      <p class="tagline">Bringing comfort and care directly to you in Kitchener-Waterloo</p>
      <a href="/contact" class="cta-button">Book an Appointment</a>
    </div>
  </div>
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-r from-white from-30% via-white/90 via-50% to-transparent z-0"></div>
    <img src="/images/hero-image.jpeg" alt="Professional Foot Care" class="w-full h-full object-cover">
  </div>
</section>

<section class="welcome bg-yellow-50">
  <div class="container">
    <h2>Welcome to Feet on the Go</h2>
    <p>Your comfort and well-being are our top priorities. We bring professional foot care services directly to your home.</p>
  </div>
</section>

<section class="services">
  <h2>Our Services</h2>
  <div class="service-grid">
    {#each services as service}
      <div class="service-card">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    {/each}
  </div>
</section>

<section class="why-choose">
  <h2>Why Choose Us?</h2>
  <div class="benefits">
    <!-- Add benefit cards here later -->
  </div>
</section>

<section class="cta">
  <h2>Ready to Schedule Your Appointment?</h2>
  <p>We're here to help with all your foot care needs</p>
  <a href="/contact" class="cta-button">Contact Us Today</a>
</section>

<style>
  .hero {
    @apply bg-gray-50 text-left -mt-8 h-[600px] overflow-hidden;
  }

  .service-grid {
    @apply grid grid-cols-1 md:grid-cols-3 gap-8 mt-8;
  }

  .service-card {
    @apply bg-gray-50 p-8 rounded-lg text-center;
  }

  .cta {
    @apply text-center bg-gray-50 rounded-xl my-16;
  }
</style>
