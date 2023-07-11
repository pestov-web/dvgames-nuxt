<script lang="ts" setup>
const { find } = useStrapi();
const {
  data: about,
  pending,
  refresh,
  error,
} = await useAsyncData("about", () => find("about", { populate: "*" }));
</script>

<template>
  <section
    class="rounded-xl bg-white p-4 flex flex-col gap-4 mt-4"
    v-html="about.data.attributes.content"
  ></section>
</template>

<style scoped lang="scss">
h1 {
  font-size: 102px;
  @apply text-xl;
}
</style>
