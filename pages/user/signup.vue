<script setup>
import { ref } from "vue";
const submitted = ref(false);
const { register } = useStrapiAuth();
const router = useRouter();

const submitHandler = async (credentials) => {
  try {
    await register(credentials);
    router.push("/");
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <section class="bg-gray-100 dark:bg-gray-900 rounded-xl py-4 mt-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        DVGames
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Зарегистрироваться
          </h1>
          <FormKit
            type="form"
            id="registration-example"
            :form-class="submitted ? 'hide' : 'show'"
            submit-label="Register"
            @submit="submitHandler"
            :actions="false"
            #default="{ value }"
          >
            <FormKit
              type="text"
              name="username"
              label="Имя пользователя"
              placeholder="ivan1991"
              help="Возможно ваш никнейм из компютерных игр"
              validation="required"
            />
            <FormKit
              type="text"
              name="email"
              label="Ваш email"
              placeholder="ivan@dvgames.ru"
              help="Мы не будем слат вам спам =)"
              validation="required|email"
            />
            <div class="double">
              <FormKit
                type="password"
                name="password"
                label="Пароль"
                validation="required|length:6|matches:/[^a-zA-Z]/"
                :validation-messages="{
                  matches: 'Please include at least one symbol',
                }"
                placeholder="******"
                help="Придумайте пароль"
              />
              <FormKit
                type="password"
                name="password_confirm"
                label="Подтвердите пароль"
                placeholder="******"
                validation="required|confirm"
                help="Давайте проверим ваш пароль"
              />
            </div>

            <FormKit type="submit" label="Зарегистрироваться" />
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Уже зарегистрированы?
              <nuxt-link
                to="/user/signin"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Вход</nuxt-link
              >
            </p>
          </FormKit>
          <div v-if="submitted">
            <h2>Регистрация успешна</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
