<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>{{ route.params.slug }}</div>
</template>

<style scoped></style>
