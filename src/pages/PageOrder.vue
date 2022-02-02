<template>
  <q-page class="q-pa-md">

    <ConfirmModal
      label="вы действительно хотите подать заявку"
      :show="showModal"
      button-cancel="не хочу"
      button-ok="подать"
      @onOk="sendProposal"
    />

    <template v-if="currentOrder">
      <OrderHeader
        :customer="currentOrder.user.username"
        :body="currentOrder.body"
        :price="currentOrder.price"
        :description="currentOrder.description"
        :title="currentOrder.title"
        :address="currentOrder.address"
        :due-date="currentOrder.dueDate"
        :due-time="currentOrder.dueTime"
        :status="currentOrder.status"
      />
    </template>

    <template v-if="currentOrder.status === 'свободен'">

      <q-card
        class="my-card q-mt-md"
      >
        <h6 class="no-margin text-center">
          заявки поданные на текущий заказ
        </h6>
        <q-separator/>
        <template v-if="!isLoading">
          <template v-if="currentOrder.listOfPerformers.length">
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

      <q-card
        v-if="isSubmitApplicationOrder"
        class="my-card q-mt-md"
      >
        <div class="flex justify-around q-pt-md q-pb-md ">
          <q-btn
            color="purple"
            label="подать заявку"
            :disable="isLoading"
            @click="submitApplicationOnOrder"
          >
            &nbsp;
            <q-icon
              right
              size="2em"
              name="schedule_send"
            />
          </q-btn>
        </div>
      </q-card>

      <q-card
        v-if="isEditOrder"
        class="my-card q-mt-md"
      >
        <div class="flex justify-around q-pt-md q-pb-md ">
          <q-btn
            v-if="true"
            color="primary"
            label="редактировать заказ"
            :disable="isLoading"
            @click="editOrder"
          >
            &nbsp;
            <q-icon
              right
              size="2em"
              name="edit"
            />
          </q-btn>
        </div>
      </q-card>

    </template>

<!--    <template v-if="victoryShow">-->
<!--      <q-card-->
<!--        class="my-card q-mt-md"-->
<!--      >-->
<!--        <q-banner class="bg-grey-3">-->
<!--          <template v-slot:avatar>-->
<!--            <q-icon-->
<!--              name="emoji_events"-->
<!--              color="primary"-->
<!--            />-->
<!--          </template>-->
<!--          Ваш заказ выполняет-->
<!--          <q-chip square class="q-ml-md">-->
<!--            <q-avatar>-->
<!--              <img src="https://cdn.quasar.dev/img/boy-avatar.png">-->
<!--            </q-avatar>-->
<!--            {{victoryName}}-->
<!--          </q-chip>-->
<!--        </q-banner>-->
<!--      </q-card>-->

<!--    </template>-->

<!--    <pre>-->
<!--      {{currentOrder}}-->
<!--    </pre>-->
    $q.platform.is.mobile: {{$q.platform.is.mobile}}
    <br>
    currentOrder: <pre>{{currentOrder}}</pre>

  </q-page>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
  import ConfirmModal from "components/modals/ConfirmModal"
  import OrderHeader from "components/orders/OrderHeader"
  import PerformerInfoBlock from "components/customers/PerformerInfoBlock"

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
      ...mapGetters('authorization', ['customer', 'performer', 'idUser']),
      // Показать кнопку подать заявку если ты мастер, победитель не выбран, и тебя нет в списке поданных
      isSubmitApplicationOrder() {
        const isSubmitPrevious = this.currentOrder.listOfPerformers.some(id => id === this.idUser )
        return this.performer && !this.currentOrder.selectedPerformer && !isSubmitPrevious
      },
      // Показать кнопку редактировать заказ если нет победителя и ты автор заказа
      isEditOrder() {
        const isYourAuthor = this.idUser === this.currentOrder.user.id
        return isYourAuthor && !this.currentOrder.victory
      }
      // victoryShow() {
      //   return this.currentOrder.victory?.length
      // },
      // victoryName() {
      //   console.log('112: ', this.currentOrder.victory[0]['name'])
      //   return this.currentOrder.victory ? this.currentOrder.victory[0]['name'] : null
      // },
      // isShowButton() {
      //   // тут сделать доп проверку, если текущий юзер уже подавал заявку то кнопку дизейблидь
      //   return !this.currentOrder.selectedPerformer
      // },
      // countPerformers() {
      //   return this.currentOrder.listOfPerformers ? this.currentOrder.listOfPerformers.length : 0
      // },
      // isCustomer() {
      //   return true
      // }
    },
    methods: {
      ...mapActions('orders', [
        'getCurrentOrder',
        // 'addProposal',
        // 'rejectPerformer',
        // 'selectPerformer'
      ]),
      // принятие заявки мастера
      submitApplicationOnOrder() {

      },
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
      },
      // переход на страницу редактирования заявки
      editOrder() {
        console.log('редактировать заказ')
        // this.$router.push({ name: 'order',  params: { idOrder: this.currentOrder.id } })
      }
    },
    mounted() {
      const { slug } = this.$route.params
      console.log('slug: ', slug)
      this.getCurrentOrder(slug)
    }
  }
</script>
