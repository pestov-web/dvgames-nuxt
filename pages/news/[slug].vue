<script setup>
const route = useRoute();
const router = useRouter();

const { data: article } = await useFetch(
  `http://localhost:1337/api/articles?filters[slug][$eq]=${route.params.slug}&populate=*`,
);
</script>
<script></script>

<template>
  <section class="bg-white rounded-xl p-6">
    <div class="flex pb-3">
      <button
        @click="router.back()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Назад
      </button>
    </div>
    <nuxt-img
      :src="`http://localhost:1337${article.data[0].attributes.image.data.attributes.url}`"
      width="100%"
      class="w-full"
    />
    <h1 class="text-2xl">{{ article.data[0].attributes.title }}</h1>
    <div
      class="flex flex-col justify-center items-center gap-4 mt-4"
      v-html="
        article.data[0].attributes.content
          .split('/uploads/')
          .join(`http://127.0.0.1:1337/uploads/`)
      "
    ></div>
  </section>
</template>

<style scoped></style>
