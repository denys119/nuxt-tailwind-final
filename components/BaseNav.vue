<template>
  <div class="flex justify-between items-center border-b-2 relative nav-container px-4 lg:px-0">
    <div>
      <nuxt-link to="/" class="font-Poppins font-bold text-2xl">
        Tutorial
      </nuxt-link>
    </div>
    <nav class="hidden sm:flex sm:items-center sm:justify-center">
      <ul class="flex items-center font-Poppins font-semibold">
        <li v-for="route in routes" :key="route.name" class="ml-2">
          <nuxt-link :to="route.to">
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
      <button class="font-Poppins font-semibold ml-2 bg-contactBg rounded-lg p-2 w-20 text-textWhite hover:bg-bgHoverButton transition-all text-sm">
        LOGIN
      </button>
    </nav>
    <div @click="isOpenMenu = !isOpenMenu" class="sm:hidden flex items-center">
      <i v-if="!isOpenMenu" style="font-size: 1.5rem" class="pi pi-bars cursor-pointer" />
      <i v-if="isOpenMenu" style="font-size: 1.5rem" class="pi pi-times cursor-pointer" />
    </div>
     <nav v-if="isOpenMenu" class="sm:hidden absolute w-full top-12 left-0 bg-bgSlate h-44 flex flex-col items-center justify-center">
      <ul class="flex items-center justify-center flex-col font-Poppins font-semibold">
        <li v-for="route in routes" :key="route.name" class="mt-2">
          <nuxt-link :to="route.to">
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
      <button class="font-Poppins font-semibold mt-2 bg-contactBg rounded-lg p-2 w-20 text-textWhite hover:bg-bgHoverButton transition-all text-sm">
        LOGIN
      </button>
    </nav>
  </div>
</template>

<script setup>
const isOpenMenu = ref(false);
const routes = [
  {
    to: '/',
    name: 'Home'
  },
  {
    to: '/',
    name: 'Who'
  },
  {
    to: '/',
    name: 'About'
  }
]
</script>

<style scoped>
  .nav-container{
    height: 7vh;
  }
</style>