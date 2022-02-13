<template>
  <q-page class="q-pa-md q-gutter-sm centerContent">

    <q-card class="my-card" :style="{ width: '70%' }">

      <q-list>

        <q-item class="flex-center">
          <q-item-section avatar>
            <q-btn
              round
              color="deep-orange"
              icon="favorite_border"
              class="text-center"
              @click="setFavorite"
            >
              {{ countLikes }}
              <q-tooltip anchor="top middle" self="center middle">
                поставить лайк
              </q-tooltip>
            </q-btn>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="green"
              size="xl"
              name="face"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              Имя
            </q-item-label>
            <q-item-label caption>
              {{ username }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="red"
              size="xl"
              name="settings_accessibility"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              Роль
            </q-item-label>
            <q-item-label caption>
              {{ role }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="amber"
              size="xl"
              name="history"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>о себе</q-item-label>
            <q-item-label caption>
              {{ bio || '-' }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>


    <q-expansion-item
      class="text-center"
      :style="{ width: '70%' }"
      label="Оставить отзыв"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      :duration="1000"
      default-opened
    >
      <div class="q-pa-md">
        <q-input
          v-model.trim="text"
          filled
          type="textarea"
          label="текст отзыва"
          label-color="black"
          outlined
          maxlength="200"
          debounce="1000"
          lazy-rules
          :rules="[ val => val.length > 0 || 'поле не должно быть пустым перед отправкой' ]"
        />
      </div>
      <div class="q-pl-md q-pr-md q-pb-md text-center">
        <q-btn
          :disable="text === ''"
          outline
          style="color: #3773af;"
          label="отправить отзыв"
          @click="sendReview"
        />
      </div>
    </q-expansion-item>

    <q-expansion-item
      class="text-center"
      :style="{ width: '70%' }"
      label="Отзывы"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      :duration="1000"
      default-opened
    >
      <template v-if="reviews && reviews.length">
        <q-chat-message
          v-for="review in reviews"
          :key="review.id"
          :name="review.author"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="[review.text]"
          :stamp="review.createdAt"
          sent
          bg-color="amber-7"
          size="10"
          class="q-pa-md"
        />
      </template>
      <q-banner
        v-else
        rounded
        class="bg-teal text-white text-center q-ma-md"
      >
        отзывов пока нет
      </q-banner>
    </q-expansion-item>

  </q-page>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';

  export default {
    name: 'PagePerformer',
    data() {
      return {
        text: '',
      }
    },
    computed: {
      ...mapGetters('performers', ['username', 'bio', 'countLikes', 'role', 'idUser']),
      ...mapState('authorization', ['reviews', 'user'])
    },
    methods: {
      // Данные того кого просматриваем
      ...mapActions('performers', ['getInfoPerformer']),
      // Данные автора
      ...mapActions('authorization', ['setLikeAccount', 'getReviewsByAccount']),
      // поставить лайк анкете
      setFavorite() {
        // console.log('поставить лайк анкете')
        this.setLikeAccount(this.idUser)
      },
      // отправить отзыв
      sendReview() {
        console.log('отправить отзывы')
        const review = {
          author: this.user.username,
          // автор отзыва
          idAuthor: this.user.id,
          text: this.text,
          // на кого оставляем отзыв
          idAccount: this.idUser
        }
        console.log('review: ', review)
      }
    },
    mounted() {
      const { id } = this.$route.params;

      // console.log('id: ', id);
      // Подгрузка основной информации по анкете
      this.getInfoPerformer(id)

      // Подгрузка отзывов по анкете
      this.getReviewsByAccount(id)
    }
  }
</script>

<style scoped lang="scss">
  .centerContent {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
</style>
