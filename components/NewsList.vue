<script setup>
const { find } = useStrapi();
const config = useRuntimeConfig();
const route = useRoute();
const dayjs = useDayjs();
dayjs.locale("ru");

const props = defineProps({
  news: {
    type: Object,
  },
});

const { data: categories } = await useAsyncData("categories", () =>
  find("categories"),
);
</script>

<template>
  <div class="pb-[100px] col-span-2 bg-white rounded-2xl">
    <nav class="px-2 pt-4">
      <ul class="flex gap-4 divide-x">
        <li class="pl-4">
          <nuxt-link to="/">Все</nuxt-link>
        </li>
        <li v-for="category in categories.data" class="pl-4">
          <nuxt-link
            :to="`/${category.attributes.slug}`"
            :class="{ active: route.params.slug === category.attributes.slug }"
            >{{ category.attributes.name }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
    <ul class="news__list divide-y overflow-hidden">
      <li v-for="(article, index) in news" class="news__card">
        <div class="dark:bg-gray-800 dark:text-gray-50">
          <div class="container grid grid-cols-12 mx-auto dark:bg-gray-900">
            <div class="flex flex-col px-6 pb-6 col-span-full row-span-full">
              <div class="flex justify-start py-4">
                <span
                  v-if="article.attributes.subcat.data"
                  class="px-2 py-1 text-xs rounded-full bg-violet-300 dark:bg-violet-400 dark:text-gray-900"
                >
                  {{ article.attributes.subcat.data.attributes.name }}
                </span>
                <span
                  v-else
                  class="px-2 py-1 text-xs rounded-full bg-violet-300 dark:bg-violet-400 dark:text-gray-900"
                >
                  {{ article.attributes.category.data.attributes.name }}
                </span>
              </div>

              <NuxtLink :to="`/news/${article.attributes.slug}`">
                <h1 class="text-2xl font-semibold py-2">
                  {{ article.attributes.title }}
                </h1>
              </NuxtLink>

              <div
                class="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full"
                v-if="index < 3"
              >
                <nuxt-img
                  v-if="article.attributes.image"
                  :src="
                    config.strapiUrl +
                    article.attributes.image.data.attributes.url
                  "
                  width="100%"
                  class="w-full"
                />
              </div>

              <p class="flex-1 pt-2">{{ article.attributes.description }}</p>

              <NuxtLink
                :to="`/news/${article.attributes.slug}`"
                class="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-orange"
              >
                <span>Подробнее</span>
              </NuxtLink>

              <div class="flex items-center justify-between pt-2">
                <div class="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 dark:text-gray-400"
                  >
                    <path
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    ></path>
                  </svg>
                  <span class="self-center text-sm">
                    {{ article.attributes.author.data.attributes.name }}
                  </span>
                </div>
                <span class="text-xs">
                  {{ dayjs(article.attributes.publishedAt) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.news {
  &__card {
    transition: all linear 0.2s;

    &:hover {
      transform: scale(1.01, 1.01);
    }
  }
}
.active {
  color: blueviolet;
}
</style>
