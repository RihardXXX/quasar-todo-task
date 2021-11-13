<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">

      <q-list
        v-if="!isLoading"
      >

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="person"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Имя клиента
            </q-item-label>
            <q-item-label caption>
              {{ currentCustomer.username }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="payment"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
             форма оплаты
            </q-item-label>
            <q-item-label caption>
              {{ currentCustomer.payment }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="star_rate"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Рейтинг клиента
            </q-item-label>
            <q-item-label caption>
              <div
                :class="colorStar"
              >
                <q-icon
                  v-for="i in currentCustomer.rating"
                  :key="i"
                  name="star"
                />
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
      <div
        class="flex justify-center"
        v-else
      >
        <q-spinner-hourglass
          color="purple"
          size="4em"
        />
      </div>

    </q-card>

    <q-card
      class="my-card q-mt-md"
    >
      <div class="q-pa-md">
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>Отзывы</q-toolbar-title>
        </q-toolbar>

        <q-list bordered>
          <q-item
            v-for="review in reviews"
            :key="review.id"
            class="q-my-sm"
            v-ripple
          >
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
              >
<!--                {{ review.letter }}-->
                {{ review.name }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{ review.name }}
              </q-item-label>
              <q-item-label
                caption
                lines="1"
              >
                {{ review.body }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon
                name="chat_bubble"
                color="gray"
              />
            </q-item-section>
          </q-item>

        </q-list>
      </div>
    </q-card>

    <q-card
      class="my-card q-mt-md"
    >
      заказы
    </q-card>

    <q-card
      class="my-card q-mt-md"
    >
      в чат с клиентом
    </q-card>


  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageCustomer',
  computed: {
    ...mapState('customers', ['currentCustomer', 'isLoading']),
    slug() {
      return this.$route.params.slug
    },
    colorStar() {
      const { rating } = this.currentCustomer
      if(rating > 7) {
        return 'text-positive'
      }else if(rating < 7 && rating > 4) {
        return 'text-warning'
      } else {
        return 'text-red'
      }
    },
    reviews() {
      return this.currentCustomer.reviews
    }
  },
  methods: {
    ...mapActions('customers', ['getCurrentCustomer']),
  },
  mounted() {
    const { slug } = this.$route.params
    this.getCurrentCustomer(slug)
  }
}
</script>

