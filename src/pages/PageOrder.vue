<template>
  <q-page class="q-pa-md">
    <template v-if="currentOrder">
      <!-- 112
      <pre>{{currentOrder}}</pre> -->
      <!-- {{this.markers}} -->
      <template v-if="currentOrder.coords.length">
        <q-banner
          dense
          class="q-mb-md bg-primary text-white text-center"
        >
          Адрес заказа на карте
        </q-banner>
        <template v-if="center.length && markers.length">
        <l-map
          ref="map"
          style="height: 300px"
          :zoom="zoom"
          :center="center"
          @ready="doSomethingOnReady()"
        >
          <l-tile-layer
            :url="url"
            :attribution="attribution"
          ></l-tile-layer>
            <l-marker
              v-for="marker in markers"
              :key="marker.name"
              :ref="marker.name"
              :lat-lng="marker.coords"
            >
              <l-popup
                :options="optionsPopup"
              >
                {{ marker.popup }}
              </l-popup>
            </l-marker>
        </l-map>
        </template>
      </template>
      <OrderHeader
        class="q-mt-md"
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
        :userId="currentOrder.user.id"
        :selectedPerformer="currentOrder.selectedPerformer"
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
  // импорты для работы с а картой
  import L from 'leaflet';
  delete L.Icon.Default.prototype._getIconUrl;
  import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet';


  export default {
    name: 'PageOrder',
    components: {
      PerformerInfoBlock,
      ConfirmModal,
      OrderHeader,
      LMap,
      LTileLayer,
      LMarker,
      LPopup
    },
    data() {
      return {
        idPerformer: 0,
        showModal: false,
        slugOrder: '',
        // данные для карты
        // куда делаем запрос
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        // зум карты
        zoom: 12,
        // текущее положение
        center: [],
        // местоположение заказа маркер
        orderLatLng: [],
        // карта
        map: null,
        // маркеры местонахождения заказа и моего местонахождения
        markers: [],
        marker: null,
        // Эта переменная с широтой и долготой адреса выполнения заказа
        savedAddress: false,
        // настройки для попапа маркера
        optionsPopup: {
          closeButton: false,
          closeOnClick: false
        },
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
      // инициализация карты
            // инициализация всего
      doSomethingOnReady() {
        // инициализация карты маркера и попапа
        this.map = this.$refs.map.mapObject;
        // console.log(this.$refs);
        // console.log(this.map);
        // this.map.openPopup;
        // когда карта будет готова то цепляем к списку координат имена маркеров
        const user = this.$refs.user[0].mapObject;
        const order = this.$refs.order[0].mapObject;
        // console.log('order: ', order);
        // console.log('user: ', user);
        // console.log(1);
        // user.openPopup();
        // console.log(2);
        order.openPopup();
        // order.off('click');
        // console.log(user.isOpen())
        // console.log(order.isOpen())
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
    created() {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
      });
      const { slug } = this.$route.params
      this.slugOrder = slug;
      this.getCurrentOrder(slug)
        .then(() => {
          // получаем координаты заказа
          this.center = this.currentOrder.coords;
          // Получаем координаты текущего местоположения пользователя
          return new Promise((resolve, reject) => {
            if(!("geolocation" in navigator)) {
              reject(new Error('Geolocation is not available.'));
            }

            navigator.geolocation.getCurrentPosition((position) => {
              // console.log(112, position);
              resolve(position.coords);
            }, (err) => {
              console.warn(`ERROR(${err.code}): ${err.message}`);
              reject(err)
            });
          })
        })
        .then(user => {
          // Создаём объекты с маркерами координатами для заказа и мастера
          // чтобы пользователь знал на каком расстоянии находится заказ
          // console.log('user: ', user);
          // console.log('this.currentOrder.coords: ', this.currentOrder.coords);
          this.markers = [
            {
              name: 'user',
              coords: [user.latitude, user.longitude],
              popup: 'ваше текущее положение'
            },
            {
              name: 'order',
              coords: this.currentOrder.coords,
              popup: 'адрес заказа'
            },
          ]
        })
    }
  }
</script>
