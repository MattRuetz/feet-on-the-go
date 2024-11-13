<script>
  import {
    faPhone,
    faLocationDot,
    faClock,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

  const services = [
    {
      id: "mobile-care",
      title: "Mobile Foot Care Services",
      description: "Professional care where you need it.",
      details: [
        "<strong>Home Visits:</strong> Enjoy professional foot care in the comfort of your own home.",
        "<strong>Retirement Home Services:</strong> We provide on-site care for seniors in residential facilities.",
        "<strong>Clinic Appointments:</strong> Visit us at Elite Training Facility for in-clinic treatments.",
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
    "<strong>Flexible Scheduling:</strong> We offer both in-home and clinic-based appointments.",
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

<section class="cta-section">
  <div class="narrow-container text-center bg-white p-16 rounded-lg shadow-lg">
    <h2>Book Your Foot Care Appointment Today</h2>
    <div class="minimal-divider"></div>
    <p class="cta-text mt-4">
      Don't let foot problems impact your quality of life. Take the first step
      towards healthier, happier feet!
    </p>
    <div class="contact-info">
      <p class="phone">
        <FontAwesomeIcon icon={faPhone} class="fa-sm mr-2" /> Call us at
        <a href="tel:519-654-6363">519-654-6363</a>
      </p>
      <p>Or visit us at our clinic location every Wednesday (9 AM - 4 PM):</p>
      <div class="clinic-location grid grid-cols-1 md:grid-cols-5 gap-4">
        <div class="clinic-location-card col-span-2 space-y-3">
          <h3>Clinic Location:</h3>
          <p class="font-bold">Elite Training Facility</p>
          <p class="italic text-sm">
            <FontAwesomeIcon icon={faLocationDot} class="fa-sm mr-2" />
            842 Victoria St. N., Kitchener, ON
          </p>
          <p class="font-semibold text-sm">
            <FontAwesomeIcon icon={faClock} class="fa-sm mr-2" />
            Every Wednesday from 9 AM - 4 PM
          </p>
          <div class="flex justify-center">
            <a
              href="https://goo.gl/maps/ZkgsBwQvfGGyUaRc7"
              target="_blank"
              class="text-sky-600 hover:text-sky-700">Get Directions</a
            >
          </div>
        </div>
        <!-- Google map embed -->
        <div class="col-span-3 rounded-lg overflow-hidden md:mt-0 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46333.253787650654!2d-80.5015662!3d43.4641804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4db29fb6851%3A0x48d18e51a7ba00!2sElite%20Training%20Facility!5e0!3m2!1sen!2sca!4v1731536168448!5m2!1sen!2sca"
            width="600"
            height="240"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <a href="/contact" class="cta-button">Schedule Your Appointment</a>
  </div>
</section>

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

  .contact-info {
    @apply my-8 space-y-4;
  }

  .phone {
    @apply text-xl font-semibold;
  }

  .phone a {
    @apply text-sky-600 hover:text-sky-700;
  }

  .clinic-location-card {
    @apply p-6 bg-gray-50 rounded-lg inline-block;
  }

  .clinic-location-card h3 {
    @apply text-xl mb-2;
  }

  .clinic-location-card p {
    @apply text-gray-600;
  }

  .cta-section {
    background-image: url("/images/foot-care.png");
    @apply bg-cover bg-center bg-no-repeat;
  }

  .cta-text {
    @apply text-xl text-gray-600 max-w-2xl mx-auto mb-8;
  }
</style>
