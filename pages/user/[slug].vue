<script setup>
const route = useRoute();
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

import { ref } from "vue";

const { data: user } = await useFetch(
  `http://localhost:1337/api/users?filters[slug][$eq]=${route.params.slug}&populate=*`,
);

const isOpen = ref(false);

const pictureUrl = ref("");
function closeModal() {
  isOpen.value = false;
  // pictureUrl.value = "";
}
function openModal(url) {
  isOpen.value = true;
  pictureUrl.value = url;
}
</script>

<template>
  <section>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
      <div class="bg-white rounded-xl p-4 flex flex-col gap-4">
        <nuxt-img
          class="w-40 h-40 rounded-full"
          :src="`http://devapi.pestov-web.ru${user[0].picture.url}`"
          alt="Rounded avatar"
        />

        <div>{{ user[0].username }}</div>
        <div><span>Имя: </span>{{ user[0].name }}</div>

        <div><span>Email: </span>{{ user[0].email }}</div>
        <div><span>Карма: </span>{{ user[0].karma }}</div>
        <div><span>Город: </span>{{ user[0].city }}</div>
      </div>
      <div class="col-span-2 bg-white rounded-xl p-4">
        <h3 class="text-2xl py-2">информация</h3>
        <p>{{ user[0].about }}</p>
      </div>
      <div class="bg-white rounded-xl p-4">
        <h3 class="text-2xl py-4">Увлечения</h3>
        <ul class="flex gap-2">
          <li
            v-for="category in user[0].categories"
            class="rounded-xl bg-orange-100 p-2"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
      <div class="col-span-2 bg-white rounded-xl p-4">
        <h3 class="text-2xl my-2">Достижения</h3>
        <ul class="gap-2 flex flex-col">
          <li
            v-for="achiv in user[0].achivs"
            class="max-w-xl rounded-md overflow-hidden shadow flex flex-col justify-between gap-2 p-2 bg-gray-300"
          >
            <nuxt-link :to="`/achivs/${achiv.slug}`">
              <h3>{{ achiv.title }}</h3>
              <p>{{ achiv.description }}</p></nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-white rounded-xl p-4 mt-4">
      <span class="text-2xl">Галерея пользователя</span>
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <li
          v-for="picture in user[0].gallery"
          :key="picture.id"
          class="relative rounded-md p-3 hover:bg-gray-100 max-h-[300px] max-w-[350px] cursor-pointer"
          @click="openModal(picture.url)"
        >
          <nuxt-img
            class="rounded-lg max-h-[250px]"
            :src="`http://devapi.pestov-web.ru${picture.url}`"
            alt=""
            fit="cover"
          />
        </li>
      </ul>
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                </DialogTitle>

                <nuxt-img
                  class="rounded-lg"
                  :src="`http://devapi.pestov-web.ru${pictureUrl}`"
                  alt=""
                  fit="cover"
                />
                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Закрыть
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </section>
</template>

<style scoped></style>
