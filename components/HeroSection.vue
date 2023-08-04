<script lang="ts" setup>
const { find } = useStrapi();
const config = useRuntimeConfig();
const {
  data: banner,
  pending,
  refresh,
  error,
} = await useAsyncData("banner", () =>
  find("banner", {
    populate: ["banner"],
  }),
);
</script>

<template>
  <div class="grid grid-cols-4 gap-4 my-4">
    <div class="col-span-2 bg-white rounded-xl">
      <HeroSlider />
    </div>
    <div class="bg-white rounded-xl overflow-hidden max-h-[300px]">
      <nuxt-link to="/shop"
        ><nuxt-img
          fit="cover"
          :src="
            config.strapiUrl + banner.data.attributes.banner.data.attributes.url
          "
      /></nuxt-link>
    </div>
    <div
      class="bg-white rounded-xl overflow-hidden max-h-[300px] flex justify-center"
    >
      <HeroCalendar />
    </div>
  </div>
</template>

<style scoped></style>
