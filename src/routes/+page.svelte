<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { dom } from "@fortawesome/fontawesome-svg-core";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
  // custom actions
  import { inview } from "$lib/actions";
  import ReviewSection from "$lib/components/ReviewSection.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import tempLogo from "$lib/images/temp_logo.png?enhanced";
  import elderlyCouple from "$lib/images/elderly-couple.jpg?enhanced";
  import footCare from "$lib/images/foot-care.jpg?enhanced";
  import happyPatient from "$lib/images/happy-patient.png?enhanced";
  import diabetes from "$lib/images/diabetes.jpg?enhanced";
  import footMassage2 from "$lib/images/foot-massage2.jpg?enhanced";

  const services = [
    {
      title: "Foot Care",
      anchor: "foot-care",
      description: "Professional foot care services",
      image: footCare,
    },
    {
      title: "Home Visits",
      anchor: "home-visits",
      description: "Convenient care in your home",
      image: happyPatient,
    },
    {
      title: "Diabetic Foot Care",
      anchor: "diabetic-care",
      description: "Specialized diabetic foot care",
      image: diabetes,
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
    content="Professional mobile foot care services in Kitchener, Waterloo, Cambridge, Woodstock, and Ayr. Specializing in senior care, diabetic foot care, and home visits."
  />
</svelte:head>

<section class="hero relative">
  <div class="hero-content narrow-container h-full relative z-10">
    {#if mounted}
      <div
        class="hero-text w-full md:w-1/2 h-full flex flex-col items-start justify-center space-y-6 sm:space-y-8"
        transition:fade={{ duration: 800 }}
      >
        <div class="logo-container" transition:fade={{ duration: 600 }}>
          <enhanced:img
            src={tempLogo}
            alt="Feet on the Go Logo"
            class="w-48 sm:w-64 md:w-auto"
            sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
            width="320"
            height="80"
          />
        </div>
        <h1 class="text-3xl sm:text-5xl text-gray-800">
          Professional Foot Care in Your Home
        </h1>
        <p class="tagline text-lg sm:text-xl">
          Bringing comfort and care directly to you in Kitchener, Waterloo,
          Cambridge, Woodstock, and Ayr
        </p>
        <div class="space-y-4">
          <a
            href="tel:+15196546363"
            class="flex items-center space-x-4 text-xl hover:text-sky-700 transition-colors"
          >
            <FontAwesomeIcon icon={faPhone} class="fa-lg" />
            <span>519-654-6363</span>
          </a>
          <!-- <a
            href="/contact#location"
            class="flex items-center space-x-4 text-xl hover:text-sky-700 transition-colors"
          >
            <FontAwesomeIcon icon={faLocationDot} class="fa-lg" />
            <span>Kitchener-Waterloo, Ontario</span>
          </a> -->
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
      class="absolute inset-0 bg-white/85 sm:bg-white/20 sm:bg-gradient-to-r from-white/95 from-30% via-white/85 via-50% to-transparent z-0"
    ></div>
    <enhanced:img
      src={footMassage2}
      alt="Professional Foot Care"
      class="w-full h-full object-cover"
      sizes="100vw"
      width="1280"
      height="800"
    />
  </div>
</section>

<section class="welcome">
  <div class="narrow-container text-center space-y-8">
    <h2>Nursing Foot Care at Your Doorstep</h2>
    <div class="minimal-divider"></div>
    <p>
      Welcome to <strong>Feet On The Go</strong>, your trusted partner for
      professional foot care in Kitchener, Waterloo, Cambridge, Woodstock, and
      Ayr. We specialize in providing personalized foot care services that cater
      to your unique needs, whether you require nursing foot care, diabetic foot
      management, or relief from common foot ailments.
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
          threshold: 0.3,
          onenter: () => setTimeout(() => handleInView(i), i * 200),
        }}
      >
        <div
          in:fade={{ duration: 600, delay: i * 200 }}
          class="space-y-4 flex flex-col justify-center items-center"
        >
          <enhanced:img
            src={service.image}
            alt={service.title}
            class="h-42 object-cover rounded-lg"
            sizes="(max-width: 320px) 100vw"
            width="320"
            height="200"
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href={`/services#${service.anchor}`} class="outline-btn mt-8"
            >About {service.title}</a
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
      in:fade={{ duration: 600 }}
    >
      <enhanced:img
        src={elderlyCouple}
        alt="Nursing Foot Care"
        class="object-cover rounded-lg shadow"
        sizes="(max-width: 640px) 640px, 1280px"
        width="1280"
        height="800"
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
          comfort of your own home or care facility in Kitchener, Waterloo,
          Cambridge, Woodstock, and Ayr.
        </p>
      </div>
      <div class="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <a href="/contact" class="cta-button">Book an Appointment</a>
        <a href="/nursing-foot-care" class="outline-btn">Foot Care Guide</a>
      </div>
    </div>
  </div>
</section>

<ReviewSection />

<CTASection />

<style>
  .hero {
    @apply bg-gray-50 text-left -mt-8 h-[800px] overflow-hidden;
  }

  .welcome {
    @apply bg-sky-50 py-12 sm:py-20;
  }

  .service-grid {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-8;
  }

  .service-card {
    @apply bg-gray-50 p-4 sm:p-8 rounded-lg text-center opacity-0 shadow transform translate-y-4 transition-all duration-500;
  }

  .service-card.visible,
  .img-container.visible {
    @apply opacity-100 translate-y-0;
  }

  .info-section-1 {
    @apply bg-gray-50;
    /* @apply container mx-auto py-36; */
  }

  .img-container {
    @apply opacity-0 translate-y-4 transition-all duration-500;
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
