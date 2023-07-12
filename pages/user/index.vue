<script lang="ts" setup>
const { find } = useStrapi();
const {
  data: users,
  pending,
  refresh,
  error,
} = await useAsyncData("users", () =>
  find("users", {
    populate: ["picture"],
  }),
);
</script>

<template>
  <section class="mt-4">
    <ul>
      <li v-for="user in users" class="p-4">
        <nuxt-link :to="`/user/${user.slug}`">
          <div class="shadow rounded-xl bg-white flex items-center p-2 gap-4">
            <nuxt-img
              class="w-10 h-10 rounded-full m-0"
              :src="
                user.picture
                  ? `http://localhost:1337${user.picture.url}`
                  : 'http://localhost:1337/uploads/dvgames_7670e7bf02.jpg'
              "
              alt="Rounded avatar"
            />
            <h2 class="w-[100px]">{{ user.name }}</h2>
            <p class="w-[100px]">{{ user.username }}</p>
            <p>{{ user.email }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
