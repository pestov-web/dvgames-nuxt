<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();

const { data: news } = await useFetch(
  config.strapiUrl +
    `/api/articles?filters[category][slug][$eq]=${route.params.slug}&populate=*`,
);

const { data: events } = await useFetch(
  config.strapiUrl +
    `/api/events?filters[category][slug][$eq]=${route.params.slug}&populate=*`,
);
</script>

<template>
  <section class="news grid grid-cols-3 gap-4 mt-4">
    <NewsList :news="news.data" />
    <EventsList :events="events.data" />
  </section>
</template>

<style scoped></style>
