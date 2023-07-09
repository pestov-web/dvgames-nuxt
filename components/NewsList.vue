<script setup>
const props = defineProps({
  news: {
    type: Object,
  },
});
</script>

<template>
  <div class="pb-[100px]">
    <ul class="news__list">
      <li v-for="(article, index) in news" class="news__card">
        <NuxtLink
          :to="`/article/${article.attributes.slug}`"
          class="news__card-link"
        >
          <nuxt-img
            v-if="index < 3"
            provider="strapi"
            :src="article.attributes.image.data.attributes.url"
            width="100%"
            height="169"
          />
          <h3 class="news__card-title">{{ article.attributes.title }}</h3>
          <p class="news__card-description">
            {{ article.attributes.description }}
          </p>
        </NuxtLink>
        <div class="news__card-info">
          <span class="news__card-date">{{
            article.attributes.publishedAt
          }}</span>
          <span>{{ article.attributes.author.data.attributes.name }}</span>
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
    @apply flex flex-col p-4 gap-1 flex-wrap;
  }
  &__card {
    @apply max-w-3xl bg-white rounded-md overflow-hidden shadow-2xl flex flex-col justify-between;
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
