<script lang="ts" setup>
const { find } = useStrapi();
const { data: goodsCategories } = await useAsyncData("goodsCategories", () =>
  find("tovarnye-kategoriis", { populate: "logo" }),
);
</script>

<template>
  <div class="page">
    <AppHeader />
    <main class="main mt-[70px]">
      <section class="grid grid-cols-4 md:grid-cols-5 gap-4 p-4">
        <aside class="bg-white rounded-xl">
          <nav>
            <ul class="flex flex-col">
              <li v-for="category in goodsCategories.data" class="p-4">
                <nuxt-link :to="`/shop/${category.attributes.slug}`">{{
                  category.attributes.name
                }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </aside>
        <div class="col-span-4 bg-white rounded-xl">
          <slot />
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.page {
  @apply flex flex-col min-h-[100vh]  justify-between content-between  mx-auto;
}
.main {
  @apply max-w-[1280px] w-full mx-auto h-full;
}
</style>

<style>
body {
  @apply bg-gray-400;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
img,
figure {
  margin: auto;
}
</style>
