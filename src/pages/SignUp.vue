<template>
  <q-page padding :style="{maxWidth: '700px', margin: '0 auto'}">

    <q-banner rounded class="bg-purple-8 text-white text-center">
      Регистрация нового пользователя
    </q-banner>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md q-mt-md"
    >
      <q-input
        filled
        type="text"
        v-model="userData.name"
        label="ваше имя"
        ref="name"
        lazy-rules
        :rules="[fnValidateName]"
      />
      <q-input
        filled
        type="text"
        v-model="userData.email"
        label="электронная почта"
        lazy-rules
        :rules="[fnValidateEmail]"
      />
      <q-input
        type="password"
        filled
        v-model="userData.password"
        label="пароль"
        lazy-rules
        :rules="[fnValidatePassword]"
      />

      <div class="q-gutter-sm">
        <q-badge
          outline
          color="primary"
          label="Выберите в какой роли вы хотите  быть зарегистрированы"
        />
        <br>
        <q-radio
          keep-color
          v-model="userData.role"
          val="customer"
          label="Клиент"
          color="teal"
        />
        <q-radio
          keep-color
          v-model="userData.role"
          val="performer"
          label="Мастер"
          color="cyan"
        />
      </div>

      <div>
        <q-btn
          :disabled="false"
          label="зарегистрироваться"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>

  </q-page>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: '',
        role: 'customer',
      },
    }
  },
  methods: {
    fnValidateEmail(email) {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || 'введите электронную почту в правильном формате'
    },
    fnValidateName(val) {
     return val.length > 6 && val.length < 20 || 'имя должно быть больше 5 символов но меньше 20'
    },
    fnValidatePassword(val) {
     return val.length && val.length > 10 && val.length < 100 || 'пароль должен быть больше 10 символов но меньше 100'
    },
    onSubmit() {
      console.log('send form data', this.userData)
      // this.userData.name = ''
      // this.userData.email = ''
      // this.userData.password = ''
    }
  }
}
</script>
