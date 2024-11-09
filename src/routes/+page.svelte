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

<section class="hero">
  <div class="hero-content">
    <h1 class="text-red-500">Professional Foot Care in Your Home</h1>
    <p class="tagline">Bringing comfort and care directly to you in Kitchener-Waterloo</p>
    <a href="/contact" class="cta-button">Book an Appointment</a>
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
    @apply bg-gray-50 text-center py-24 -mt-8;
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
