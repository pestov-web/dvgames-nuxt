<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

const { data: achiv } = await useFetch(
  `http://localhost:1337/api/achives?filters[slug][$eq]=${route.params.slug}&populate=*`,
);
</script>

<template>
  <section class="rounded-xl bg-white h-full mt-4">
    <div class="flex p-3 justify-between">
      <button
        @click="router.back()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Назад
      </button>
    </div>
    <nuxt-img
      class="rounded-lg max-h-[250px]"
      :src="`http://devapi.pestov-web.ru${achiv.data[0].attributes.image.data.attributes.url}`"
      alt=""
      fit="cover"
    />

    <h1 class="p-4 text-2xl">{{ achiv.data[0].attributes.title }}</h1>
    <p class="p-4">{{ achiv.data[0].attributes.description }}</p>
    <div
      v-if="achiv.data[0].attributes.local"
      class="flex flex-col gap-4 p-4"
      v-html="
        achiv.data[0].attributes.content
          .split('/uploads/')
          .join(`http://devapi.pestov-web.ru/uploads/`)
      "
    ></div>
    <div
      v-else
      class="flex flex-col gap-4 p-4"
      v-html="achiv.data[0].attributes.content"
    ></div>
  </section>
</template>

<style scoped>
img {
  justify-self: center;
  align-self: center;
}
</style>
