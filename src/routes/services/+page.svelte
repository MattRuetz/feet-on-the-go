<script>
  import {
    faPhone,
    faLocationDot,
    faClock,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import CTASection from "$lib/components/CTASection.svelte";

  const services = [
    {
      id: "mobile-care",
      title: "Mobile Foot Care Services",
      description: "Professional care where you need it.",
      details: [
        "<strong>Home Visits:</strong> Enjoy professional foot care in the comfort of your own home.",
        "<strong>Retirement Home Services:</strong> We provide on-site care for seniors in residential facilities.",
      ],
    },
    {
      id: "nail-care",
      title: "Professional Nail Care",
      description: "Expert nail care services using sterile techniques.",
      details: [
        "<strong>Nail Trimming and Filing:</strong> We use sterile techniques to prevent ingrown toenails and reduce thick or Ram's horn nails.",
        "<strong>Ingrown Toenail Treatment:</strong> Our skilled RPNs provide gentle, effective care for painful ingrown nails.",
      ],
    },
    {
      id: "corn-callus",
      title: "Corn and Callus Management",
      description: "Effective treatment and prevention of corns and calluses.",
      details: [
        "<strong>Safe Reduction:</strong> We carefully reduce corns and calluses to alleviate pain and pressure.",
        "<strong>Root Cause Analysis:</strong> Our experts identify and address the sources of friction to prevent recurrence.",
        "<strong>Customized Solutions:</strong> We offer personalized recommendations for footwear and care routines.",
      ],
    },
    {
      id: "diabetic-care",
      title: "Diabetic Foot Care",
      description: "Specialized care for diabetic patients.",
      details: [
        "<strong>Comprehensive Assessments:</strong> Regular check-ups to detect early signs of diabetic foot complications.",
        "<strong>Neuropathy Screening:</strong> We test for reduced sensation to prevent unnoticed injuries.",
        "<strong>Circulation Checks:</strong> Our nurses monitor blood flow to prevent diabetic ulcers.",
        "<strong>Patient Education:</strong> We provide crucial information on daily diabetic foot care practices.",
      ],
    },
    {
      id: "education",
      title: "Preventative Foot Health Education",
      description: "Empowering you with knowledge for better foot health.",
      details: [
        "<strong>Personalized Care Plans:</strong> We develop tailored foot care routines for each client.",
        "<strong>Footwear Advice:</strong> Learn about proper shoe selection for optimal foot health.",
        "<strong>Self-Care Techniques:</strong> We teach you how to maintain healthy feet between visits.",
      ],
    },
  ];

  let whyChooseUs = [
    "<strong>Registered Practical Nurses:</strong> All our foot care specialists are certified RPNs.",
    "<strong>Sterile Equipment:</strong> We use hospital-grade sterilization techniques for your safety.",
    "<strong>We Come to You:</strong> Serving Kitchener, Waterloo, Cambridge, and Woodstock areas.",
    "<strong>Flexible Scheduling:</strong> We offer in-home appointments at your convenience.",
  ];
</script>

<svelte:head>
  <title>Our Services - Feet on the Go</title>
  <meta
    name="description"
    content="Explore our comprehensive foot care services including diabetic care and home visits in Kitchener-Waterloo."
  />
</svelte:head>

<section class="hero">
  <div class="narrow-container">
    <h1>Our Specialized Foot Care Services</h1>
    <div class="minimal-divider"></div>
    <p class="hero-text">
      Professional foot care services tailored to your needs, delivered with
      care and expertise.
    </p>
  </div>
</section>

<section class="services">
  <div class="narrow-container">
    {#each services as service}
      <div class="service-card" id={service.id}>
        <div class="service-content">
          <h2>{service.title}</h2>
          <p class="service-description">{service.description}</p>
          <ul class="service-details">
            {#each service.details as detail}
              <li>{@html detail}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="why-choose-us bg-sky-50">
  <div class="narrow-container">
    <h2>Why Choose Feet On The Go?</h2>
    <ul class="benefits-list">
      {#each whyChooseUs as benefit}
        <li>{@html benefit}</li>
      {/each}
    </ul>
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

  .service-card {
    @apply py-16 border-b border-gray-200 last:border-0;
  }

  .service-description {
    @apply text-lg text-gray-600 mb-4;
  }

  .service-details {
    @apply space-y-3 list-disc pl-6;
  }

  .service-details li {
    @apply text-gray-700;
  }

  .benefits-list {
    @apply grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-8 text-xl;
  }

  .benefits-list li:before {
    content: "✓";
    @apply text-sky-600 mr-2 font-bold text-3xl;
  }
</style>
