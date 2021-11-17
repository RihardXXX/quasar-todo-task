<template>
  <q-page class="q-pa-md">

    <ConfirmModal
      label="вы действительно хотите подать заявку"
      :show="showModal"
      button-cancel="не хочу"
      button-ok="подать"
      @onOk="sendProposal"
    />

    <q-banner class="bg-primary text-white text-center">
      {{ currentOrder.title }}
    </q-banner>
<!--{{currentOrder.listOfPerformers}}-->
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
      v-if="isShowButton"
      class="my-card q-mt-md"
    >
      <q-item-section>
        <q-btn
          v-if="!currentOrder.selectedPerformer"
          color="purple"
          label="подать заявку на выволнение работы"
          :disable="isLoading"
          @click="showModal = !showModal"
        />
      </q-item-section>
    </q-card>
    <q-card class="my-card q-mt-md">
      <h6 class="no-margin text-center">
        заявки поданные на текущий заказ
      </h6>
      <q-separator/>
      <template v-if="!isLoading">
        <template v-if="countPerformers">
            <PerformerInfoBlock
              v-for="performer in currentOrder.listOfPerformers"
              :key="performer.id"
              :name="performer.name"
              :slug="performer.id"
              @acceptApplication="acceptApplication"
              @rejectApplication="rejectApplication"
            />
        </template>
        <q-banner
          v-else
          rounded
          class="bg-secondary text-white text-center"
        >
          пока никто не подал заявок
        </q-banner>
      </template>
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
  </q-page>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import PerformerInfoBlock from "components/customers/PerformerInfoBlock";
  import ConfirmModal from "components/modals/ConfirmModal";

  export default {
    name: 'PageOrder',
    components: {
      PerformerInfoBlock,
      ConfirmModal
    },
    data() {
      return {
        isLoading: false,
        idPerformer: 0,
        showModal: false
      }
    },
    computed: {
      ...mapState('orders', ['currentOrder']),
      slug() {
        return this.$route.params.slug
      },
      isShowButton() {
        // тут сделать доп проверку, если текущий юзер уже подавал заявку то кнопку дизейблидь
        return !this.currentOrder.selectedPerformer
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
      },
      countPerformers() {
        return this.currentOrder.listOfPerformers ? this.currentOrder.listOfPerformers.length : 0
      }
    },
    methods: {
      ...mapActions('orders', ['getCurrentOrder', 'addProposal']),
      acceptApplication(slug) {
        console.log('slug: acceptApplication', slug)
        this.$q.dialog({
          title: 'Подтверждение',
          message: 'Вы дествительно хотите выбрать этого мастера для работы',
          cancel: 'нет',
          ok: 'да',
          persistent: true
        }).onOk(() => {
          console.log('>>>> OK, received', slug)
        }).onCancel(() => {
          console.log('>>>> Cancel')
        })
      },
      rejectApplication(slug) {
        console.log('slug: rejectApplication', slug);
        this.$q.dialog({
          title: 'Подтверждение',
          message: 'Вы дествительно хотите отклонить мастера и удалить из желающих',
          cancel: 'нет',
          ok: 'да',
          persistent: true
        }).onOk(() => {
          console.log('>>>> OK, received', slug)
        }).onCancel(() => {
          console.log('>>>> Cancel')
        })
      },
      sendProposal() {
        console.log('подать заявку')

        // закрываем модалку модалку
        this.showModal = false

        const performer = {
          id: this.idPerformer,
          name: 'Roberto'
        }

        this.idPerformer += 1

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
