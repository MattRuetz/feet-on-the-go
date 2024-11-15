<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { dom } from "@fortawesome/fontawesome-svg-core";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
  // custom actions
  import { inview } from "$lib/actions";
  import ReviewSection from "$lib/components/ReviewSection.svelte";

  const services = [
    {
      title: "Foot Care",
      anchor: "foot-care",
      description: "Professional foot care services",
      image: "/images/foot-care.jpg",
    },
    {
      title: "Home Visits",
      anchor: "home-visits",
      description: "Convenient care in your home",
      image: "/images/happy-patient.png",
    },
    {
      title: "Diabetic Foot Care",
      anchor: "diabetic-care",
      description: "Specialized diabetic foot care",
      image: "/images/diabetes.jpg",
    },
  ];

  let mounted = $state(false);
  let serviceVisibility = $state(services.map(() => false));
  let imageVisibility = $state([false, false]);

  onMount(() => {
    // Watch for icon changes
    dom.watch();
    mounted = true;
  });

  function handleInView(index) {
    serviceVisibility[index] = true;
  }
</script>

<svelte:head>
  <title>Feet on the Go - Professional Mobile Foot Care Services</title>
  <meta
    name="description"
    content="Professional mobile foot care services in Kitchener-Waterloo. Specializing in senior care, diabetic foot care, and home visits."
  />
</svelte:head>

<section class="hero relative">
  <div class="hero-content narrow-container h-full relative z-10">
    {#if mounted}
      <div
        class="hero-text w-full md:w-1/2 h-full flex flex-col items-start justify-center space-y-6 sm:space-y-8"
        transition:fade={{ duration: 800 }}
      >
        <div class="logo-container">
          <img
            src="/images/temp_logo.png"
            alt="Feet on the Go Logo"
            class="w-48 sm:w-64 md:w-80 h-auto"
            transition:fade={{ duration: 600 }}
          />
        </div>
        <h1 class="text-3xl sm:text-5xl text-gray-800">
          Professional Foot Care in Your Home
        </h1>
        <p class="tagline text-lg sm:text-xl">
          Bringing comfort and care directly to you in Kitchener-Waterloo
        </p>
        <div class="space-y-4">
          <a
            href="tel:+15196546363"
            class="flex items-center space-x-4 text-xl hover:text-sky-600 transition-colors"
          >
            <FontAwesomeIcon icon={faPhone} class="fa-lg" />
            <span>519-654-6363</span>
          </a>
          <a
            href="/contact#location"
            class="flex items-center space-x-4 text-xl hover:text-sky-600 transition-colors"
          >
            <FontAwesomeIcon icon={faLocationDot} class="fa-lg" />
            <span>Kitchener-Waterloo, Ontario</span>
          </a>
        </div>
        <a
          href="/contact"
          class="cta-button text-base sm:text-xl"
          transition:fly={{ x: -100, delay: 800, duration: 600 }}
        >
          Book an Appointment
        </a>
      </div>
    {/if}
  </div>
  <div class="absolute inset-0">
    <div
      class="absolute inset-0 bg-white/85 sm:bg-white/20 md:bg-gradient-to-r from-white/95 from-30% via-white/85 via-50% to-transparent z-0"
    ></div>
    <img
      src="/images/foot-massage2.jpg"
      alt="Professional Foot Care"
      class="w-full h-full object-cover"
    />
  </div>
</section>

<section class="welcome">
  <div class="narrow-container text-center space-y-8">
    <h2>Expert Nursing Foot Care at Your Doorstep</h2>
    <div class="minimal-divider"></div>
    <p>
      Welcome to <strong>Feet On The Go</strong>, your trusted partner for
      professional foot care in the Kitchener-Waterloo area. We specialize in
      providing personalized foot care services that cater to your unique needs,
      whether you require expert nursing foot care, diabetic foot management, or
      relief from common foot ailments.
    </p>
    <p>
      With a focus on compassionate care and preventative education, we strive
      to ensure that every step you take is a comfortable one.
    </p>
  </div>
</section>

<section class="services container mx-auto">
  <h2>Our Services</h2>
  <div class="service-grid">
    {#each services as service, i}
      <div
        class="service-card"
        class:visible={serviceVisibility[i]}
        use:inview={{
          threshold: 0.9,
          onenter: () => setTimeout(() => handleInView(i), i * 200),
        }}
      >
        <div
          transition:fade={{ duration: 600, delay: i * 200 }}
          class="space-y-4"
        >
          <img
            src={service.image}
            alt={service.title}
            class="w-full h-42 object-cover rounded-lg"
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href={`/services#${service.anchor}`} class="outline-btn mt-8"
            >Learn More</a
          >
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="info-section-1">
  <div
    class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:space-x-12"
  >
    <div
      class="col-span-1 h-[300px] md:h-[600px] lg:h-auto img-container"
      class:visible={imageVisibility[0]}
      use:inview={{
        threshold: 0.3,
        onenter: () => (imageVisibility[0] = true),
      }}
    >
      <img
        src="/images/elderly-couple.jpg"
        alt="Nursing Foot Care"
        class="w-full h-full object-cover rounded-lg shadow"
        transition:fade={{ duration: 600 }}
      />
    </div>
    <div class="col-span-1 space-y-6 py-4 lg:py-8">
      <div class="space-y-4">
        <h2 class="text-3xl lg:text-4xl text-start">Nursing Foot Care</h2>
        <p>
          At Feet On The Go, we combine medical expertise with a gentle touch to
          provide comprehensive care tailored to your unique needs.
        </p>
        <p>
          Whether you're managing a chronic condition or simply want to maintain
          healthy feet, our professional nursing foot care services offer the
          perfect blend of medical knowledge and compassionate care, all in the
          comfort of your own home or care facility in the Kitchener-Waterloo
          area.
        </p>
      </div>
      <div class="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <a href="/contact" class="cta-button">Book an Appointment</a>
        <a href="/nursing-foot-care" class="outline-btn">Learn More</a>
      </div>
    </div>
  </div>
</section>

<section class="info-section-2">
  <div
    class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:space-x-12"
  >
    <div class="col-span-1 space-y-6 py-4 lg:py-8 order-2 lg:order-1">
      <div class="space-y-4">
        <h2 class="text-3xl lg:text-4xl text-start">
          Foot Massage and Relaxation Treatments
        </h2>
        <p>
          Our Foot Massage and Relaxation Treatments combine therapeutic
          techniques to promote circulatory health and relaxation.
        </p>
        <p>
          We apply targeted pressure to
          <strong>stimulate blood flow</strong>, <strong>reduce edema</strong>,
          and <strong>alleviate myofascial tension</strong> in the lower extremities.
          These treatments are designed to complement your overall foot care regimen,
          potentially aiding in the management of conditions such as peripheral neuropathy,
          plantar fasciitis, and venous insufficiency.
        </p>
        <div class="pt-4">
          <a href="/contact" class="cta-button">Book an Appointment</a>
        </div>
      </div>
    </div>
    <div
      class="col-span-1 h-[300px] md:h-[600px] order-1 lg:order-2 img-container"
      class:visible={imageVisibility[1]}
      use:inview={{
        threshold: 0.3,
        onenter: () => (imageVisibility[1] = true),
      }}
    >
      <img
        src="/images/foot-massage.jpg"
        alt="Foot Massage"
        class="w-full h-full object-cover rounded-lg shadow"
        transition:fade={{ duration: 600 }}
      />
    </div>
  </div>
</section>

<ReviewSection />

<section class="cta">
  <div class="cta-background-overlay"></div>
  <div class="cta-content space-y-8 narrow-container">
    <h2>Ready to Schedule Your Appointment?</h2>
    <p>We're here to help with all your foot care needs</p>
    <a href="/contact" class="cta-button">Contact Us Today</a>
  </div>
</section>

<style>
  .hero {
    @apply bg-gray-50 text-left -mt-8 h-[800px] max-h-[calc(100vh-64px)] overflow-hidden;
  }

  .welcome {
    @apply bg-sky-50 py-12 sm:py-20;
  }

  .service-grid {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8;
  }

  .service-card {
    @apply bg-gray-50 p-4 sm:p-8 rounded-lg text-center opacity-0 shadow transform translate-y-4 transition-all duration-500;
  }

  .service-card.visible,
  .img-container.visible {
    @apply opacity-100 translate-y-0;
  }

  .cta {
    @apply relative;
    background: url("/images/elderly-couple2.jpg") no-repeat center center;
    background-size: cover;
    background-position: bottom;
  }

  .cta-background-overlay {
    @apply absolute inset-0 bg-black/30 z-10;
  }

  .cta-content {
    @apply text-center bg-white shadow-lg rounded-xl py-8 sm:py-16 px-4 relative z-20;
  }

  .info-section-1 {
    @apply bg-gray-50;
    /* @apply container mx-auto py-36; */
  }

  .img-container {
    @apply opacity-0 translate-y-4 transition-all duration-500;
  }

  .info-section-2 {
    @apply bg-sky-50;
  }

  .logo-container {
    @apply -ml-2 sm:ml-0 w-full;
  }

  @media (max-width: 640px) {
    section {
      @apply py-12;
    }

    h1 {
      @apply text-3xl;
    }

    h2 {
      @apply text-2xl;
    }

    h3 {
      @apply text-xl;
    }

    p {
      @apply text-base;
    }

    .hero {
      @apply -mt-8 min-h-[600px];
    }

    .logo-container {
      @apply w-4/5 max-w-[240px];
    }
  }
</style>
