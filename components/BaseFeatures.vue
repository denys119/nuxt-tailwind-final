<template>
  <div>
    <div>
      <h1>
        Features
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium earum, cupiditate voluptas repellat inventore ipsum similique fugit aliquam quidem eum praesentium error possimus?
      </p>
    </div>
    <base-content v-for="content in cardsContent" :key="content.title" :content="content" />
  </div>
</template>

<script setup>
const cardsContent = [
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