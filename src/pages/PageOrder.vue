<template>
  <q-page class="q-pa-md">
    <q-banner class="bg-primary text-white text-center">
      {{ currentOrder.title }}
    </q-banner>

    <q-card class="my-card">

      <q-list>

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
    </q-card>


    <q-card
      v-if="!currentOrder.selectedPerformer"
      class="my-card q-mt-md"
    >
      <q-item-section>
        <q-btn
          color="purple"
          label="подать заявку на выволнение работы"
          @click="sendProposal"
        />
      </q-item-section>
    </q-card>
  </q-page>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'PageOrder',
    data() {
      return {
        iconsList: [
          'description',
        ]
      }
    },
    computed: {
      ...mapState('orders', ['currentOrder']),
      slug() {
        return this.$route.params.slug
      },
      statusCurrentOrder() {
        const statusObject = {
          positive: 'свободен',
          info: 'в работе',
          warning: 'выполнено'
        }
        // выбор цвета в зависимости от статуса заявки, берём ключ объекта
        return this.currentOrder.status
          ? Object.keys(statusObject).find(key => statusObject[key] === this.currentOrder.status)
          : null
      }
    },
    methods: {
      ...mapActions('orders', ['getCurrentOrder', 'addProposal']),
      sendProposal() {
        console.log('подать заявку')
        const performer = {
          id: 2323232,
          name: 'Roberto'
        }
        const idCurrentOrder = this.currentOrder.id

        this.addProposal({performer, idCurrentOrder})
      }
    },
    mounted() {
      const { slug } = this.$route.params
      this.getCurrentOrder(slug)
    }
  }
</script>
