<script setup>
const route = useRoute();
const router = useRouter();
definePageMeta({
  layout: "shop",
});

const { data: good } = await useFetch(
  `http://localhost:1337/api/tovaries?filters[slug][$eq]=${route.params.slug}&populate=*`,
);
</script>

<template>
  <div class="p-4">
    <h2>{{ good.data[0].attributes.title }}</h2>
    <nuxt-img
      class="rounded-lg max-h-[250px]"
      :src="`http://devapi.pestov-web.ru${good.data[0].attributes.pictures.data[0].attributes.url}`"
      alt=""
      fit="cover"
    />
    <p>цена: {{ good.data[0].attributes.price }}</p>
    <p>остаток: {{ good.data[0].attributes.stock }}</p>
    <p v-html="good.data[0].attributes.description" class="p-4"></p>
    <ul class="p-4 flex gap-2">
      <li
        v-for="picture in good.data[0].attributes.pictures.data"
        class="shadow rounded-xl"
      >
        <nuxt-img
          class="rounded-lg max-h-[250px] max-w-[250px]"
          :src="`http://devapi.pestov-web.ru${picture.attributes.url}`"
          alt=""
          fit="cover"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
