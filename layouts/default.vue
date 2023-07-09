<script lang="ts" setup></script>

<template>
  <div class="page">
    <AppHeadaer />
    <main class="main mt-[100px]">
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
  @apply bg-gray;
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
</style>
