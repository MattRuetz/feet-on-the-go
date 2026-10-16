<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPhone } from "@fortawesome/free-solid-svg-icons";
  import ReviewSection from "$lib/components/ReviewSection.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import elderlyCouple from "$lib/images/elderly-couple.jpg?enhanced";
  import footCare from "$lib/images/foot-care.jpg?enhanced";
  import happyPatient from "$lib/images/happy-patient.png?enhanced";
  import diabetes from "$lib/images/diabetes.jpg?enhanced";
  import footMassage2 from "$lib/images/foot-massage2.jpg?enhanced";

  const services = [
    {
      title: "Foot Care",
      anchor: "nail-care",
      description: "Toenail trimming, ingrown toenails, corns and calluses.",
      image: footCare,
    },
    {
      title: "Home Visits",
      anchor: "mobile-care",
      description:
        "Care at home, in retirement homes, nursing homes and group homes.",
      image: happyPatient,
    },
    {
      title: "Diabetic Foot Care",
      anchor: "diabetic-care",
      description:
        "Regular foot checks and neuropathy screening for people with diabetes.",
      image: diabetes,
    },
  ];

  const organization = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Feet on the Go",
    url: "https://feetonthego.com/",
    telephone: "+1-519-654-6363",
    description:
      "Mobile nursing foot care at home, in retirement homes and in care facilities.",
    founder: {
      "@type": "Person",
      name: "Kelly Ferreira",
      jobTitle: "Registered Practical Nurse",
    },
    areaServed: ["Kitchener", "Waterloo", "Cambridge", "Woodstock", "Ayr"].map(
      (name) => ({
        "@type": "City",
        name,
        containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
      }),
    ),
  };
  const organizationJsonLd =
    '<script type="application/ld+json">' +
    JSON.stringify(organization) +
    "</" +
    "script>";
</script>

<svelte:head>
  <title>Feet on the Go | In-Home Nursing Foot Care in Kitchener-Waterloo</title
  >
  <meta
    name="description"
    content="Nursing foot care at home from a Registered Practical Nurse in Kitchener, Waterloo, Cambridge, Woodstock and Ayr. Toenail trimming, corns, calluses and diabetic foot care."
  />
  {@html organizationJsonLd}
</svelte:head>

<section class="hero">
  <enhanced:img
    src={footMassage2}
    alt=""
    class="hero-image"
    sizes="100vw"
    fetchpriority="high"
  />
  <div class="hero-overlay"></div>
  <div class="narrow-container hero-content">
    <div class="hero-text">
      <h1>Professional Foot Care in Your Home</h1>
      <p class="tagline">
        Bringing comfort and care directly to you in Kitchener, Waterloo,
        Cambridge, Woodstock, and Ayr
      </p>
      <div class="hero-actions">
        <a href="tel:+15196546363" class="cta-button">
          <FontAwesomeIcon icon={faPhone} />
          <span class="whitespace-nowrap">Call 519-654-6363</span>
        </a>
        <a href="/contact" class="outline-btn">Book an Appointment</a>
      </div>
    </div>
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

<section class="services">
  <div class="max-w-6xl mx-auto">
    <h2>Our Services</h2>
    <ul class="service-grid">
      {#each services as service}
        <li class="service-card">
          <enhanced:img
            src={service.image}
            alt=""
            class="service-image"
            sizes="(min-width: 768px) 360px, 100vw"
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href={`/services#${service.anchor}`} class="outline-btn"
            >About {service.title}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="info-section">
  <div class="info-grid">
    <enhanced:img
      src={elderlyCouple}
      alt=""
      class="info-image"
      sizes="(min-width: 1024px) 560px, 100vw"
    />
    <div class="space-y-6">
      <h2 class="text-left">Nursing Foot Care</h2>
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
      <div class="info-actions">
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
    @apply relative overflow-hidden bg-gray-50 flex items-center min-h-[32rem] md:min-h-[38rem] py-16;
  }

  .hero :global(.hero-image) {
    @apply absolute inset-0 w-full h-full object-cover;
  }

  .hero-overlay {
    @apply absolute inset-0 bg-white/90 md:bg-transparent md:bg-gradient-to-r from-white from-35% via-white/90 via-55% to-white/10;
  }

  .hero-content {
    @apply relative w-full;
  }

  .hero-text {
    @apply max-w-2xl space-y-6;
  }

  .hero-text h1 {
    @apply sm:text-5xl md:text-6xl mb-0;
  }

  .tagline {
    @apply text-lg sm:text-xl md:text-2xl text-gray-900;
  }

  .hero-actions,
  .info-actions {
    @apply flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-2;
  }

  .hero-actions a,
  .info-actions a {
    @apply sm:whitespace-nowrap;
  }

  .welcome {
    @apply bg-sky-50;
  }

  .welcome p {
    @apply max-w-3xl mx-auto text-left sm:text-center;
  }

  .service-grid {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10;
  }

  .service-card {
    @apply flex flex-col items-center text-center bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6;
  }

  .service-card :global(.service-image) {
    @apply w-full aspect-[16/10] object-cover rounded-lg mb-6;
  }

  .service-card h3 {
    @apply mb-2;
  }

  .service-card p {
    @apply text-gray-700 mb-6 flex-1;
  }

  .service-card a {
    @apply w-full px-4 sm:px-4 text-lg;
  }

  .info-section {
    @apply bg-gray-50;
  }

  .info-grid {
    @apply max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center;
  }

  .info-grid :global(.info-image) {
    @apply w-full h-72 sm:h-96 lg:h-[32rem] object-cover rounded-xl;
  }
</style>
