<template>
  <q-page class="q-pa-md">

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
        :favorites-count="currentOrder.favoritesCount"
        :slug="currentOrder.slug"
      />
    </template>

      <q-card
        v-if="currentOrder ? !currentOrder.victory : undefined"
        class="my-card q-mt-md"
      >
        <h6 class="no-margin text-center">
          заявки поданные на текущий заказ
        </h6>
        <q-separator/>
        <template>
          <template v-if="listOfPerformersOnCurrentOrder.length">
            <PerformerInfoBlock
              v-for="performer in listOfPerformersOnCurrentOrder"
              :key="performer.id"
              :id="performer.id"
              :name="performer.username"
              @acceptApplication="acceptApplication"
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

<!--    <pre>{{currentOrder}}</pre>-->

<!--      <q-card-->
<!--        v-if="isEditOrder"-->
<!--        class="my-card q-mt-md"-->
<!--      >-->
<!--        <div class="flex justify-around q-pt-md q-pb-md ">-->
<!--          <q-btn-->
<!--            v-if="true"-->
<!--            color="primary"-->
<!--            label="редактировать заказ"-->
<!--            :disable="isLoading"-->
<!--            @click="editOrder"-->
<!--          >-->
<!--            &nbsp;-->
<!--            <q-icon-->
<!--              right-->
<!--              size="2em"-->
<!--              name="edit"-->
<!--            />-->
<!--          </q-btn>-->
<!--        </div>-->
<!--      </q-card>-->

<!--    </template>-->

<!--    <template v-if="true">-->
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
<!--            rerer-->
<!--          </q-chip>-->
<!--        </q-banner>-->
<!--      </q-card>-->

<!--    </template>-->

  </q-page>
</template>

<script>
  import {mapActions, mapGetters, mapState} from 'vuex';
  import ConfirmModal from "components/modals/ConfirmModal"
  import OrderHeader from "components/orders/OrderHeader"
  import PerformerInfoBlock from "components/customers/PerformerInfoBlock"
  import {QSpinnerGears} from 'quasar';

  export default {
    name: 'PageOrder',
    components: {
      PerformerInfoBlock,
      ConfirmModal,
      OrderHeader
    },
    data() {
      return {
        idPerformer: 0,
        showModal: false,
        slugOrder: '',
      }
    },
    computed: {
      ...mapState('orders', ['currentOrder', 'isLoading', 'listOfPerformersOnCurrentOrder']),
      ...mapGetters('authorization', ['customer', 'performer', 'idUser']),
      // Показать блок для подачи заявок и кто подал если статус свободен
      isShowBlockSubmitApplication() {

      },
      // Показать кнопку подать заявку если ты мастер, победитель не выбран, и тебя нет в списке поданных
      isSubmitApplicationOrder() {
        if (this.currentOrder) {
          const isSubmitPrevious = this.currentOrder.listOfPerformers.some(id => Number(id) === this.idUser )
          return this.performer && !this.currentOrder.selectedPerformer && !isSubmitPrevious
        }
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
        'addProposal',
        // 'rejectPerformer',
        'selectPerformer'
      ]),
      // принятие заявки мастера
      submitApplicationOnOrder() {
        // открываем модалку с загрузкой
        // спиннер загрузки
        this.$q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'red',
          message: 'Идёт загрузка'
        })

        this.addProposal(this.slugOrder)
          .then(() => this.$q.loading.hide())
          .catch(() => this.$q.loading.hide())
      },
      acceptApplication(id) {
        this.$q.dialog({
          title: 'Подтверждение',
          message: 'Вы дествительно хотите выбрать этого мастера для работы',
          cancel: 'нет',
          ok: 'да',
          persistent: true
        }).onOk(() => {
          console.log('>>>> OK, received', id)
          this.selectPerformer({
            id,
            slugOrder: this.slugOrder
          })
        }).onCancel(() => {
          console.log('>>>> Cancel')
        })
      },
      // отклонение заявки определённого мастера
      // rejectApplication(slug) {
      //   console.log('slug: rejectApplication', slug);
      //   this.$q.dialog({
      //     title: 'Подтверждение',
      //     message: 'Вы дествительно хотите отклонить мастера и удалить из желающих',
      //     cancel: 'нет',
      //     ok: 'да',
      //     persistent: true
      //   }).onOk(() => {
      //     console.log('>>>> OK, received', slug)
      //     this.rejectPerformer(slug)
      //   }).onCancel(() => {
      //     console.log('>>>> Cancel')
      //   })
      // },
    },
    mounted() {
      const { slug } = this.$route.params
      this.slugOrder = slug;
      this.getCurrentOrder(slug)
    }
  }
</script>
