<script setup>
const { find } = useStrapi();
const {
  data: news,
  pending,
  refresh,
  error,
} = await useAsyncData("articles", () =>
  find("articles", {
    populate: ["image", "categories", "author", "category", "subcat"],
  }),
);
const { data: events } = await useAsyncData("events", () =>
  find("events", { populate: "logo" }),
);
</script>

<template>
  <div class="">
    <HeroSection />
    <section class="news grid grid-cols-3 gap-4">
      <NewsList :news="news.data" />
      <EventsList :events="events.data" />
    </section>
  </div>
</template>
