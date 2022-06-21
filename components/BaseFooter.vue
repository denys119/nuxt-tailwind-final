<template>
  <div>
    <div>
      <nuxt-link to="/">
        Tutorial
      </nuxt-link>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <nuxt-link :to="route.to">
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div>
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