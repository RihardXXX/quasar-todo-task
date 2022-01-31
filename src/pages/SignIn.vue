<template>
  <q-page padding :style="{maxWidth: '700px', margin: '0 auto'}">

    <q-banner rounded class="bg-purple-8 text-white text-center">
      Авторизация
    </q-banner>

    <div class="q-gutter-y-md" style="max-width: 700px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mail" label="почта и пароль" />
<!--          <q-tab name="social" label="Социальные сети" />-->
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mail">

            <q-form
              @submit="onSubmit"
              class="q-gutter-md q-mt-md"
            >
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

              <div>
                  <q-btn
                    :disabled="false"
                    label="войти"
                    type="submit"
                    color="primary"
                  />
              </div>
            </q-form>

          </q-tab-panel>

<!--          <q-tab-panel name="social">-->
<!--            <div class="q-pa-md q-gutter-sm flex justify-center">-->
<!--              <q-btn-->
<!--                color="white"-->
<!--                text-color="black"-->
<!--                label="instagram"-->
<!--                icon-right="photo_camera"-->
<!--                @click="signInInstagram"-->
<!--              />-->
<!--              <q-btn-->
<!--                color="white"-->
<!--                text-color="black"-->
<!--                label="vk"-->
<!--                icon-right="person_add"-->
<!--              />-->
<!--              <q-btn-->
<!--                color="white"-->
<!--                text-color="black"-->
<!--                label="google"-->
<!--                icon-right="search"-->
<!--              />-->
<!--              <q-form-->
<!--                @submit="signInNumber"-->
<!--              >-->
<!--                <q-input-->
<!--                  filled-->
<!--                  v-model="phone"-->
<!--                  label="вход по номеру"-->
<!--                  mask="###########"-->
<!--                  hint="формат: 7 (777) 777 - 77 - 77"-->
<!--                  lazy-rules-->
<!--                  :rules="[ val => val.length >= 11 || 'пожалуйста введите все символы']"-->
<!--                />-->
<!--                <br>-->
<!--                <q-btn-->
<!--                  class="center"-->
<!--                  color="white"-->
<!--                  type="submit"-->
<!--                  text-color="black"-->
<!--                  label="войти по номеру"-->
<!--                />-->
<!--              </q-form>-->


<!--            </div>-->
<!--          </q-tab-panel>-->

        </q-tab-panels>
      </q-card>

    </div>

  </q-page>
</template>

<script>
  import { mapActions } from 'vuex';
  import { QSpinnerGears } from 'quasar';

  export default {
    name: 'SignIn',

    data() {
      return {
        userData: {
          name: '',
          email: '',
          password: '',
          role: 'customer',
        },
        tab: 'mail',
        phone: '',
      }
    },

    methods: {
      ...mapActions('authorization', ['signInUser', 'signInNumberPhone']),

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

        // console.log('send form data', this.userData)
        // спиннер загрузки
        this.$q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'red',
          message: 'Идёт загрузка'
        })
        // запрос на сервер
        this.signInUser({
          email: this.userData.email,
          password: this.userData.password
        })
        .then(() => {
          // успешный ответ
          this.$q.loading.hide()
          this.$router.push({name: 'index'})
        })
        .catch((error) => {
          // тут выпускать модалку что пользователь с такой почтой и паролем не найден
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

      },
      signInInstagram() {
        console.log('sigIn instagram')
      },
      signInNumber() {
        this.signInNumberPhone(this.phone)
      }
    }
  }
</script>

