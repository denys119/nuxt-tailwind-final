<template>
  <div>
    <div>
      <h1>
        {{ content.title }}
      </h1>
      <p>
        {{ content.description }}
      </p>
      <button>
        More
      </button>
    </div>
    <div>
      <img :src="`../assets/images/${content.imgName}`" alt="">
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