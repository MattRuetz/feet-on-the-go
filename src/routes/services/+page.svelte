<script>
  import CTASection from "$lib/components/CTASection.svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

  const services = [
    {
      id: "mobile-care",
      title: "Mobile Foot Care for Seniors",
      description: "Expert foot care delivered directly to you.",
      details: [
        "<strong>Home Visits:</strong> Receive professional foot care in the comfort and privacy of your own home.",
        "<strong>Retirement Home Services:</strong> We provide dedicated on-site care for seniors residing in retirement communities.",
        "<strong>Group Homes:</strong> Our team offers specialized foot care services tailored for clients in group home settings.",
        "<strong>Nursing Homes:</strong> We deliver compassionate foot care services to residents in nursing facilities.",
        "<strong>Homeless Shelters:</strong> Our services extend to individuals in homeless shelters, ensuring everyone has access to essential foot care.",
      ],
    },
    {
      id: "nail-care",
      title: "Toenail Trimming and Nail Care",
      description: "Safe toenail cutting and filing with sterile tools.",
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
    "<strong>Sterile Equipment:</strong> We use autoclave sterilization techniques for your safety.",
    "<strong>We Come to You:</strong> Serving Kitchener, Waterloo, Cambridge, Woodstock, and Ayr.",
    "<strong>Flexible Scheduling:</strong> We offer in-home appointments at your convenience.",
  ];
</script>

<svelte:head>
  <title>In-Home Foot and Nail Care for Seniors | Feet on the Go</title>
  <meta
    name="description"
    content="Toenail trimming, ingrown toenails, corns, calluses and diabetic foot care from a Registered Practical Nurse, at home or in retirement and nursing homes."
  />
</svelte:head>

<section class="hero">
  <div class="narrow-container">
    <h1>In-Home Foot and Nail Care</h1>
    <div class="minimal-divider"></div>
    <p class="hero-text">
      Nursing foot care from a Registered Practical Nurse, at your home,
      retirement home or care facility in Kitchener, Waterloo, Cambridge,
      Woodstock and Ayr.
    </p>
  </div>
</section>

<section class="services">
  <div class="services-list">
    {#each services as service}
      <div class="service-block" id={service.id}>
        <h2>{service.title}</h2>
        <p class="service-description">{service.description}</p>
        <ul class="service-details">
          {#each service.details as detail}
            <li>{@html detail}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<section class="why-choose-us">
  <div class="narrow-container">
    <h2>Why Choose Feet On The Go?</h2>
    <ul class="benefits-list">
      {#each whyChooseUs as benefit}
        <li>
          <FontAwesomeIcon icon={faCircleCheck} class="benefit-icon" />
          <span>{@html benefit}</span>
        </li>
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
    @apply max-w-3xl mx-auto mt-4;
  }

  .services-list {
    @apply max-w-3xl mx-auto;
  }

  .service-block {
    @apply py-10 sm:py-12 border-b-2 border-gray-100 last:border-0 first:pt-0;
  }

  .service-block h2 {
    @apply text-left mb-2 sm:mb-3;
  }

  .service-description {
    @apply text-gray-700 mb-5;
  }

  .service-details {
    @apply space-y-3 list-disc pl-6 marker:text-sky-700;
  }

  .service-details li {
    @apply text-base sm:text-lg md:text-xl text-gray-800 pl-1;
  }

  .why-choose-us {
    @apply bg-sky-50;
  }

  .benefits-list {
    @apply grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-8 max-w-4xl mx-auto;
  }

  .benefits-list li {
    @apply flex items-start gap-4 text-lg sm:text-xl bg-white rounded-xl p-5 border-2 border-sky-100;
  }

  .benefits-list :global(.benefit-icon) {
    @apply text-sky-700 text-2xl mt-0.5 shrink-0;
  }
</style>
