<template>
  <div class="bg-bgGray flex flex-col items-center py-5">
    <h1 class="text-2xl font-bold font-Poppins">
      Frequently Asked Questions
    </h1>
    <p class="text-center font-semibold text-textColor font-Poppins">
      Here are some of our FAQs. If you have any other questions feel free to email us.
    </p>
    <base-faq v-for="faq in faqs" :key="faq.title" :faq="faq" />
    <button class="font-semibold bg-bgOrange p-2 rounded-full hover:bg-bgHoverOrange transition-all mt-4 font-Poppins">
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