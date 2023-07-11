<script lang="ts" setup>
const user = useStrapiUser();
</script>

<template>
  <div class="bg-white">{{ user }}</div>
</template>

<style scoped></style>
