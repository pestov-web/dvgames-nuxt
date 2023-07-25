<script lang="ts" setup>
const { find } = useStrapi();
const {
  data: slides,
  pending,
  refresh,
  error,
} = await useAsyncData("slides", () =>
  find("heroslides", {
    populate: ["image"],
  }),
);
</script>

<template>
  <Swiper
    class="max-h-[300px] rounded-xl overflow-hidden"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in slides.data" class="w-full">
      <div class="relative">
        <nuxt-img
          fit="cover"
          :src="`http://localhost:1337${slide.attributes.image.data.attributes.url}`"
        />
        <p
          class="z-10 text-white text-2xl absolute top-[230px] left-6 bg-gray-600 p-2 rounded-xl"
        >
          {{ slide.attributes.title }}
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
