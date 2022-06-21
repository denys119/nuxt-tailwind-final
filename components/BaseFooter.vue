<template>
  <div class="bg-footerBg h-32 text-textWhite flex justify-between flex-col sm:flex-row px-4 lg:px-0">
    <div class="flex items-center flex-col sm:flex-row">
      <nuxt-link to="/" class="font-Poppins font-bold text-2xl mb-2 sm:mb-0">
        Tutorial
      </nuxt-link>
      <ul class="flex items-center font-Poppins mb-2 sm:mb-0">
        <li v-for="route in routes" :key="route.name" class="ml-2 text-lg">
          <nuxt-link :to="route.to">
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-center">
      <nuxt-link v-for="social in socialLinks" :key="social.icon" :to="social.to">
        <i :class="`pi ${social.icon} ml-4`" style="font-size: 2rem" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const routes = [
  {
    to: "/",
    name: "Features"
  },
  {
    to: "/",
    name: "Pricing"
  },
  {
    to: "/",
    name: "Contact"
  },
];

const socialLinks = [
  {
    to: "/",
    icon: "pi-facebook"
  },
  {
    to: "/",
    icon: "pi-instagram"
  },
  {
    to: "/",
    icon: "pi-linkedin"
  }
]
</script>