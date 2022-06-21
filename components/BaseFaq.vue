<template>
  <div>
    <div>
      <h1>
        <span>
          {{ faq.title }}
        </span>
        <i v-if="!isOpenAnswer" @click="isOpenAnswer = !isOpenAnswer" />
        <i v-if="isOpenAnswer" @click="isOpenAnswer = !isOpenAnswer" />
      </h1>
      <div v-if="isOpenAnswer">
        <p>
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