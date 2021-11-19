<template>
  <q-page class="q-pa-md">

    <ConfirmModal
      label="вы действительно хотите подать заявку"
      :show="showModal"
      button-cancel="не хочу"
      button-ok="подать"
      @onOk="sendProposal"
    />

    <OrderHeader
      :body="currentOrder.body"
      :price="currentOrder.price"
      :description="currentOrder.description"
      :title="currentOrder.title"
      :address="currentOrder.address"
      :customer="currentOrder.customer"
      :due-date="currentOrder.dueDate"
      :due-time="currentOrder.dueTime"
      :status="currentOrder.status"
    />


    <template v-if="isShowInfoBlock">

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

      <q-card
        class="my-card q-mt-md"
      >
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

    </template>

<!--    <pre>-->
<!--      {{currentOrder}}-->
<!--    </pre>-->

  </q-page>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import ConfirmModal from "components/modals/ConfirmModal"
  import OrderHeader from "components/orders/OrderHeader"
  import PerformerInfoBlock from "components/customers/PerformerInfoBlock"
  import {rejectPerformer} from "src/store/orders/actions"

  export default {
    name: 'PageOrder',
    components: {
      PerformerInfoBlock,
      ConfirmModal,
      OrderHeader
    },
    data() {
      return {
        namePerformer: 'Roberto',
        idPerformer: 0,
        showModal: false
      }
    },
    computed: {
      ...mapState('orders', ['currentOrder', 'isLoading']),
      slug() {
        return this.$route.params.slug
      },
      isShowInfoBlock() {
        // тут делать проверку ещё является ли пользователь перформером
        return this.currentOrder.status === 'свободен'
      },
      isShowButton() {
        // тут сделать доп проверку, если текущий юзер уже подавал заявку то кнопку дизейблидь
        return !this.currentOrder.selectedPerformer
      },
      countPerformers() {
        return this.currentOrder.listOfPerformers ? this.currentOrder.listOfPerformers.length : 0
      }
    },
    methods: {
      ...mapActions('orders', [
        'getCurrentOrder',
        'addProposal',
        'rejectPerformer',
        'selectPerformer'
      ]),
      // принятие заявки мастера
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
          this.selectPerformer(slug)
        }).onCancel(() => {
          console.log('>>>> Cancel')
        })
      },
      // отклонение заявки определённого мастера
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
          this.rejectPerformer(slug)
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
          name: this.namePerformer
        }

        this.idPerformer += 1
        this.namePerformer = this.namePerformer + 'q'

        this.addProposal({performer, currentOrder: this.currentOrder})
      }
    },
    mounted() {
      const { slug } = this.$route.params
      this.getCurrentOrder(slug)
    }
  }
</script>
