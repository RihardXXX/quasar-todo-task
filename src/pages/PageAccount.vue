<template>
  <q-page
    v-if="currentPerformer"
    class="q-pa-md q-gutter-sm centerContent"
  >

    <q-card class="my-card" :style="{ width: '70%' }">

      <q-list>

        <q-item class="flex-center justify-around">
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
          <div v-if="isCheckFollow">
            <q-btn
              outline
              color="primary"
              :label="labelFollow"
              @click="setFollow"
            />
            <q-btn
              v-if="isFollow"
              class="q-ml-md"
              round
              icon="notifications"
              disable
            >
            </q-btn>
          </div>
        </q-item>

        <q-separator color="orange" inset />

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
        <q-infinite-scroll
          @load="loadMore"
          ref="infiniteScroll"
        >
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots
                color="primary"
                size="70px"
              />
            </div>
          </template>
        </q-infinite-scroll>
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
    name: 'PageAccount',
    data() {
      return {
        text: '',
      }
    },
    computed: {
      ...mapGetters('performers', ['username', 'bio', 'countLikes', 'role', 'idUser', 'listFollows']),
      // Комменты не убирать а то будет баг айдишка авторизованного пользователя будет перебивать айди кому лайкаем
      // ...mapGetters('authorization', ['idUser']),
      ...mapState('authorization', ['reviews', 'user', 'reviewsCount']),
      ...mapState('performers', ['currentPerformer']),
      // Тут проверяем можно ли продписываться на данный аккаунт
      // Если роли одинаковые то подписываться нельзя
      isCheckFollow() {
        // console.log('this.user: ', this.user.role)
        // console.log('performers role: ', this.currentPerformer.role)
        const { user, currentPerformer } = this
        return user && currentPerformer
          ? user.role !== currentPerformer.role
          : false
      },
      // Проверяем подписан ли текущий юзер на этот аккаунт
      isFollow() {
        // console.log(this.listFollows)
        // console.log(this.user.id)
        return this.listFollows.some(idUsers => Number(idUsers) === this.user.id)
      },
      // Текст на кнопке есои подписаны
      labelFollow() {
        return this.isFollow ? 'отписаться' : 'подписаться'
      }
    },
    methods: {
      // Данные того кого просматриваем
      ...mapActions('performers', ['getInfoPerformer']),
      // Данные автора
      ...mapActions('authorization',
        ['setLikeAccount', 'getReviewsByAccount', 'createReview', 'subscribeAccount']),
      // поставить лайк анкете
      setFavorite() {
        // console.log('поставить лайк анкете', this.idUser)
        this.setLikeAccount(this.idUser)
      },
      // отправить отзыв
      sendReview() {
        // console.log('отправить отзывы')
        const review = {
          author: this.user.username,
          // автор отзыва
          idAuthor: this.user.id,
          text: this.text,
          // на кого оставляем отзыв
          idAccount: this.idUser
        }
        // console.log('review: ', review)
        this.createReview(review)
          .then(() => {
            // console.log('успех')
            this.text = ''
          })
          .catch(message => {
            this.$q.dialog({
              title: 'Ошибка',
              message,
              persistent: true
            }).onOk(() => {
              // console.log('>>>> OK, received')
            })
          })
      },
      // Бесконечная загрузка метод скролла
      loadMore (index, done) {
        // Чтобы первый раз не пролетел мимо скролл))
        if (this.reviews.length === 0) {
          this.$refs.infiniteScroll.resume()
          done()
          return
        }

        // Если с количество найденных отзывов больше чем прогружено то запускаем заново
        if (this.reviewsCount > this.reviews.length) {
          console.log('загружаем дальше')
          this.$store.commit('authorization/setOffset', 10)
          this.getReviewsByAccount(this.idUser)
            .then(() => done())
        } else if (this.reviews.length >= this.reviewsCount) {
          console.log('прогрузку останавливаем')
          this.$refs.infiniteScroll.stop()
        }
      },
      // Подписаться на текущий аккаунт
      setFollow() {
        console.log('подписаься на аккаунт')
        this.subscribeAccount(this.idUser)
      }
    },
    mounted() {
      this.$store.commit('authorization/resetStateReviews')
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
