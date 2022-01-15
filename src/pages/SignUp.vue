<template>
  <q-page padding :style="{maxWidth: '700px', margin: '0 auto'}">

    <q-banner rounded class="bg-purple-8 text-white text-center">
      Регистрация нового пользователя
    </q-banner>
    <pre>
      {{user}}
    </pre>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md q-mt-md"
    >
      <q-input
        filled
        type="text"
        v-model="user.username"
        label="ваше имя"
        ref="name"
        hint="обязательное поле"
        lazy-rules
        :rules="[fnValidateName]"
      />
      <q-input
        filled
        type="text"
        v-model="user.email"
        label="электронная почта"
        hint="обязательное поле"
        lazy-rules
        :rules="[fnValidateEmail]"
      />
      <q-input
        type="password"
        filled
        v-model="user.password"
        label="пароль"
        hint="обязательное поле"
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
          v-model="user.role"
          val="customer"
          label="Клиент"
          color="teal"
        />
        <q-radio
          keep-color
          v-model="user.role"
          val="performer"
          label="Мастер"
          color="cyan"
        />
      </div>

      <q-input
        v-model="user.bio"
        placeholder="расскажите о себе"
        filled
        autogrow
      />

<!--      <vue-recaptcha-->
<!--        ref="invisibleRecaptcha"-->
<!--        @verify="onVerify"-->
<!--        @expired="onExpired"-->
<!--        :sitekey="sitekey"-->
<!--      />-->

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

<!--<script src="https://unpkg.com/vue@3.1.4/dist/vue.global.js" defer></script>-->
<!--<script src="https://unpkg.com/vue-demi@0.12.1/lib/index.iife.js" defer></script>-->
<!--<script-->
<!--  src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"-->
<!--  async-->
<!--  defer-->
<!--&gt;</script>-->

<script>
  import { mapActions } from 'vuex';
  import { QSpinnerGears } from 'quasar';
  // import { VueRecaptcha } from 'vue-recaptcha';

  // ключ сайта 6LewMAQeAAAAABPbSEC1CMEBYVNOgl8OAMKNAW_p
  // секретный ключ 6LewMAQeAAAAAGAvV_wj6ASeXrhI0XKS-77nnp8b

  export default {
    name: 'SignUp',

    // components: {
    //   VueRecaptcha,
    // },

    data() {
      return {
        user: {
          username: '',
          email: '',
          password: '',
          role: 'performer',
          bio: '',
        },
        sitekey: '6LewMAQeAAAAABPbSEC1CMEBYVNOgl8OAMKNAW_p',
      }
    },

    mounted() {
      // let recaptchaScript = document.createElement('script')
      // let unpkg1 = document.createElement('script')
      // let unpkg2 = document.createElement('script')
      // // unpkg1.setAttribute('defer', true)
      // // unpkg2.setAttribute('defer', true)
      // unpkg1.setAttribute('src', 'https://unpkg.com/vue@3.1.4/dist/vue.global.js')
      // unpkg2.setAttribute('src', 'https://unpkg.com/vue-demi@0.12.1/lib/index.iife.js')
      // // recaptchaScript.setAttribute('async', true);
      // // recaptchaScript.setAttribute('defer', true);
      // recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
      // document.head.appendChild(unpkg1)
      // document.head.appendChild(unpkg2)
      // document.head.appendChild(recaptchaScript)
    },

    methods: {
      ...mapActions('authorization', ['registerUser']),

      // методы для работы с каптчей
      // onSubmit: function () {
      //   this.$refs.invisibleRecaptcha.execute()
      // },
      // onVerify: function (response) {
      //   console.log('успешное прохождение каптчи: ' + response)
      // },
      // onExpired: function () {
      //   console.log('истечение срока каптчи')
      //   // this.$refs.invisibleRecaptcha.reset()
      // },
      // resetRecaptcha() {
      //   this.$refs.recaptcha.reset() // Direct call reset method
      // },

      fnValidateEmail(email) {
          return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) || 'введите электронную почту в правильном формате'
      },
      fnValidateName(val) {
       return val.length > 6 && val.length < 20 || 'имя должно быть больше 6 символов но меньше 20'
      },
      fnValidatePassword(val) {
       return val.length && val.length > 10 && val.length < 100 || 'пароль должен быть больше 10 символов но меньше 100'
      },
      onSubmit() {
        // this.$refs.invisibleRecaptcha.execute();
        // console.log('send form data', this.user)
        // спиннер загрузки
        this.$q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'red',
          message: 'Идёт загрузка'
        })
        this.registerUser(this.user)
          .then(() => {
            // успешный ответ
            this.$q.loading.hide()
            this.$router.push({ path: '/' })
        })
        .catch((error) => {
          // тут выпускать модалку если произошла ошибка при регистрации
          this.$q.loading.hide()
          this.$q.dialog({
            title: 'Ошибка',
            message: error,
            ok: 'ок',
            persistent: true
          }).onOk(() => {
            console.log(112)
          })
        })
      }
    }
  }
</script>
