<script setup>
const props = defineProps({
  events: {
    type: Object,
  },
});
</script>

<template>
  <div class="pb-[100px]">
    <h2 class="news__title">События</h2>
    <ul class="news__list">
      <li v-for="event in events" class="news__card">
        <NuxtLink :to="`/event/${event.id}`" class="news__card-link">
          <!--          <nuxt-img-->
          <!--            provider="strapi"-->
          <!--            :src="event.attributes.logo.data.attributes.url"-->
          <!--            width="210"-->
          <!--            height="169"-->
          <!--          />-->
          <h3 class="news__card-title">{{ event.attributes.title }}</h3>
        </NuxtLink>
        <div class="news__card-info">
          <span class="news__card-date">{{ event.attributes.date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.news {
  &__title {
    @apply p-4 font-bold;
  }
  &__list {
    @apply flex flex-col p-4 gap-4 flex-wrap;
  }
  &__card {
    @apply max-w-xl bg-gray rounded-md overflow-hidden shadow-2xl flex flex-col justify-between;
    transition: all linear 0.2s;
    &:hover {
      transform: scale(1.03, 1.03);
    }
    &-link {
      @apply flex flex-col gap-2;
    }
    &-title {
      @apply font-bold px-2;
    }
    &-description {
      @apply text-sm px-2;
    }

    &-info {
      @apply p-2 flex justify-between self-end w-full;
    }
  }
}
</style>
