<script lang="ts" setup></script>

<template>
  <div class="page">
    <AppHeader />
    <main class="main mt-[70px]">
      <slot />
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
