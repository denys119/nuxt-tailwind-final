<template>
  <div>
    <h1>
      Frequently Asked Questions
    </h1>
    <p>
      Here are some of our FAQs. If you have any other questions feel free to email us.
    </p>
    <base-faq v-for="faq in faqs" :key="faq.title" :faq="faq" />
    <button>
      More info
    </button>
  </div>
</template>

<script setup>
  const faqs = [
    {
      title: "How much does it take for shipping?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odio aspernatur architecto optio molestiae quasi repellat minima ad ab. Deleniti?"
    },
    {
      title: "How can I return it?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odio aspernatur architecto optio molestiae quasi repellat minima ad ab. Deleniti?"
    },
    {
      title: "How much does it take for returning?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odio aspernatur architecto optio molestiae quasi repellat minima ad ab. Deleniti?"
    },
  ]
</script>