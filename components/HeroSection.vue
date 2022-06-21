<template>
  <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-36 px-4 lg:px-0 mt-8 hero-container">
    <div class="flex flex-col items-center lg:items-start lg:flex-1">
      <h1 class="text-3xl font-extrabold text-titleColor mb-3 lg:mb-6 font-Poppins">
        More than a simple phone
      </h1>
      <p class="font-semibold text-textColor font-Poppins text-center lg:text-start">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum commodi illo tenetur fuga saepe accusamus corporis earum reiciendis consequatur adipisci, fugit iusto itaque nisi delectus quod ducimus sunt perspiciatis. Minima, quas? Hic vitae voluptatem at ipsam? Asperiores repudiandae et perferendis!
      </p>
      <div class="flex items-center justify-center mt-4 lg:mt-10">
        <button class="font-semibold bg-bgOrange hover:bg-bgHoverOrange p-2 rounded-full transition-all font-Poppins">
          Free shipping
        </button>
        <button class="ml-10 font-semibold bg-bgOrange hover:bg-bgHoverOrange p-2 rounded-full transition-all font-Poppins">
          Buy as a gift
        </button>
      </div>
    </div>
    <div class="image-container overflow-hidden rounded-3xl w-96">
      <img src="@/assets/images/hero.jpg" alt="" class="h-full w-full object-cover">
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
 .hero-container{
    height: calc(100vh - 7vh- 2.5rem);
 }
 .image-container {
    height: 500px;
  }
</style>