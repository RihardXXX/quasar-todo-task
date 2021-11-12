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
              name="subtitles"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Клиент
            </q-item-label>
            <q-item-label caption>
              {{ currentOrder.customer }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="subtitles"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              краткое описание
            </q-item-label>
            <q-item-label caption>
              {{ currentOrder.description }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="description"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              что нужно сделать
            </q-item-label>
            <q-item-label caption>
              {{ currentOrder.body }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="price_change"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              стоимость работ
            </q-item-label>
            <q-badge
              color="positive"
              outline
              style="max-width: fit-content"
              :label="`цена: ${currentOrder.price}`"
            />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="event"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              дата и время начала работ
            </q-item-label>
            <div class="flex justify-start">
              <q-badge
                outline
                color="primary"
                style="max-width: fit-content"
                :label="currentOrder.dueDate"
              />
              <q-badge
                outline
                color="primary"
                style="max-width: fit-content"
                class="q-ml-md"
                :label="currentOrder.dueTime"
              />
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="home"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              адрес
            </q-item-label>
            <q-item-label caption>
              {{ currentOrder.address }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="timeline"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              статус
            </q-item-label>
            <q-badge
              :color="statusCurrentOrder"
              style="max-width: fit-content"
              :label="currentOrder.status"
            />
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
      в чат с клиентом
    </q-card>

    <q-card
      class="my-card q-mt-md"
    >
      отзывы
    </q-card>


  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageCustomer',
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState('customers', ['currentCustomer']),
    slug() {
      return this.$route.params.slug
    },
    // isShowButton() {
    //   // тут сделать доп проверку, если текущий юзер уже подавал заявку то кнопку дизейблидь
    //   return !this.currentOrder.selectedPerformer
    // },
    // statusCurrentOrder() {
    //   const statusObject = {
    //     positive: 'свободен',
    //     info: 'в работе',
    //     warning: 'выполнено'
    //   }
    //   // выбор цвета в зависимости от статуса заявки, берём ключ объекта
    //   return this.currentOrder.status
    //     ? Object.keys(statusObject).find(key => statusObject[key] === this.currentOrder.status)
    //     : null
    // }
  },
  methods: {
    ...mapActions('customers', ['getCurrentCustomer']),
    sendProposal() {
      console.log('подать заявку')

      // const performer = {
      //   id: 2323232,
      //   name: 'Roberto'
      // }

      this.isLoading = true
      setTimeout(() => {
        this.addProposal({performer, currentOrder: this.currentOrder})
        this.isLoading = false
      }, 2000)
    }
  },
  mounted() {
    const { slug } = this.$route.params
    this.isLoading = true
    setTimeout(() => {
      this.getCurrentOrder(slug)
      this.isLoading = false
    }, 2000)
  }
}
</script>

