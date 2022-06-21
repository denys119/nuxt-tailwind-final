<template>
  <div :class="[content.direction === 'left' ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row', 'flex items-center my-10']">
    <div class="flex items-center flex-col">
      <h1 class="text-2xl font-bold mb-4 font-Poppins">
        {{ content.title }}
      </h1>
      <p class="text-center max-w-2xl font-semibold text-textColor font-Poppins">
        {{ content.description }}
      </p>
      <button class="mt-4 font-semibold bg-bgOrange hover:bg-bgHoverOrange p-2 rounded-full transition-all font-Poppins w-36">
        More
      </button>
    </div>
    <div class="image-container overflow-hidden rounded-3xl my-4">
      <img :src="`../assets/images/${content.imgName}`" alt="" class="h-full w-full object-cover">
    </div>
  </div>
</template>

<script setup>
  defineProps({
    content: Object
  })
</script>

<style scoped>
  .image-container {
    height: 500px;
    width: 400px;
  }
</style>