<template>
  <div>
    <div class="relative flex flex-col items-center">
      <h1 class="flex items-center justify-center p-5 font-extrabold border-blue-400 border-b font-Poppins">
        <span>
          {{ faq.title }}
        </span>
        <i v-if="!isOpenAnswer" @click="isOpenAnswer = !isOpenAnswer" class="pi pi-angle-down ml-2 cursor-pointer" />
        <i v-if="isOpenAnswer" @click="isOpenAnswer = !isOpenAnswer" class="pi pi-angle-up ml-2 cursor-pointer" />
      </h1>
      <div v-if="isOpenAnswer">
        <p class="text-center font-semibold text-textColor font-Poppins">
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    faq: Object
  });
  const isOpenAnswer = ref(false);
</script>