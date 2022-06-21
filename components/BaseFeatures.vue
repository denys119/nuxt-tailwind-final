<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center bg-bgGray px-4 py-5 flex-col">
      <h1 class="text-2xl font-bold font-Poppins">
        Features
      </h1>
      <p class="text-center font-semibold text-textColor font-Poppins">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium earum, cupiditate voluptas repellat inventore ipsum similique fugit aliquam quidem eum praesentium error possimus?
      </p>
    </div>
    <base-content v-for="content in featuresContent" :key="content.title" :content="content" />
  </div>
</template>

<script setup>
const featuresContent = [
  {
    title: 'Bigger size',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium earum, cupiditate voluptas repellat inventore ipsum similique fugit aliquam quidem eum praesentium error possimus?',
    imgName: 'phone2.jpg',
    direction: 'left'
  },
  {
    title: 'Longer battery life',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium earum, cupiditate voluptas repellat inventore ipsum similique fugit aliquam quidem eum praesentium error possimus?',
    imgName: 'phone1.jpg',
    direction: 'right'
  },
  {
    title: 'New design',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium earum, cupiditate voluptas repellat inventore ipsum similique fugit aliquam quidem eum praesentium error possimus?',
    imgName: 'phone3.jpg',
    direction: 'left'
  },
]
</script>

<style scoped>
</style>