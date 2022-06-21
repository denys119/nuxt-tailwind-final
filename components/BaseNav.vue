<template>
  <div>
    <div>
      <nuxt-link to="/">
        Tutorial
      </nuxt-link>
    </div>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <nuxt-link :to="route.to">
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
      <button>
        LOGIN
      </button>
    </nav>
    <div @click="isOpenMenu = !isOpenMenu">
      <i v-if="!isOpenMenu" style="font-size: 1.5rem" />
      <i v-if="isOpenMenu" style="font-size: 1.5rem" />
    </div>
     <nav v-if="isOpenMenu">
      <ul>
        <li v-for="route in routes" :key="route.name">
          <nuxt-link :to="route.to">
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
      <button>
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