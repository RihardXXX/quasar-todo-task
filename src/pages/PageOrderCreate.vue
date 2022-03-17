<template>
  <q-page class="container">

    <h5 class="text-center q-mb-none">Создать заказ</h5>
    <div class="q-pa-md">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          ref="nameOrder"
          filled
          v-model="order.title"
          label="имя заказа"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidateLength]"
        />
        <q-input
          ref="description"
          filled
          v-model="order.description"
          label="краткое описание"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidateLength]"
        />
        <q-input
          ref="body"
          type="textarea"
          filled
          v-model="order.body"
          label="общая информация о заказе"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidateBody]"
        />

        <q-banner
          ref="banner"
          dense
          class="bg-grey-3 text-center"
        >
          установите на карте адрес куда должен приехать мастер
        </q-banner>


        <q-banner
          v-if="isWarningAddress"
          dense
          class="bg-red-4   text-center"
        >
          установите адрес заказа перед его созданием
        </q-banner>

        <div class="mapButtons">
          <q-btn
            :outline="!savedAddress"
            color="primary"
            label="установить адрес заказа на карте"
            @click="setAddressOrder"
          />
          <q-btn
            :outline="savedAddress"
            color="primary"
            label="изменить адрес заказа на карте"
            @click="changeAddressOrder"
          />
        </div>

        <q-input
          ref="address"
          filled
          v-model="order.address"
          label="адрес"
          clearable
          lazy-rules
          :disable="savedAddress"
          :rules="[fnValidateTitle, fnValidateLength]"
        />

        <template v-if="center.length && markerLatLng.length">
          <l-map
            ref="map"
            style="height: 400px"
            :zoom="zoom"
            :center="center"
            @ready="doSomethingOnReady()"
          >
            <l-tile-layer
              :url="url"
              :attribution="attribution"
            ></l-tile-layer>
            <l-marker
              ref="marker"
              :lat-lng="markerLatLng"
            >
              <l-popup
                ref="popup"
                :options="optionsPopup"
              >
                Адрес заказа установлен
              </l-popup>
            </l-marker>
          </l-map>
        </template>


        <div class="q-pa-md">
          <q-option-group
            :options="options"
            type="checkbox"
            v-model="order.category"
          />
        </div>

        <div
          ref="timeSection"
          class="q-pa-md text-center"
        >
          <q-banner
            v-if="isWarningDateOrTime"
            dense
            class="q-mb-md bg-red-4   text-center"
          >
            дата или время выполнения заказа не установлены
          </q-banner>
          <q-date
            v-model="order.dueDate"
            title="дата выполнения"
            subtitle="какого числа придти мастеру"
          />
        </div>

        <div class="q-pa-md text-center">
          <q-time
            v-model="order.dueTime"
            format24h
          />
        </div>

        <q-input
          type="number"
          filled
          prefix="₽"
          v-model="order.price"
          label="цена за работу"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidatePrice]"
        />


        <div class="q-pa-md text-center">
          <q-btn
            :label="buttonLabel"
            type="submit"
            color="primary"
          />
        </div>

      </q-form>

    </div>

  </q-page>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import {QSpinnerGears} from 'quasar';
  import { categoryList } from 'boot/staticData';
  // import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  delete L.Icon.Default.prototype._getIconUrl;
  import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet';
  import { scroll } from 'quasar';
  const { getScrollTarget, setVerticalScrollPosition } = scroll

  export default {

    name: 'OrderCreate',

    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup
    },

    data() {
      return {
        category: ['сантехника', 'электрика', 'общестроительные'],
        create: true,
        edit: false,
        order: {
          title: '',
          description: '',
          body: '',
          price: '',
          address: '',
          category: [],
          dueDate: '',
          dueTime: '',
        },
        options: [...categoryList],
        // данные для карты
        // куда делаем запрос
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        // зум карты
        zoom: 20,
        // текущее положение
        center: [],
        // местоположение маркера
        markerLatLng: [],
        leafletMapOptions: {
          closePopupOnClick: false,
          doubleClickZoom: 'center',
        },
        // карта
        map: null,
        marker: null,
        // Попап
        popup: null,
        // Эта переменная с широтой и долготой адреса выполнения заказа
        savedAddress: false,
        // настройки для попапа маркера
        optionsPopup: {
          closeButton: false,
          closeOnClick: false
        },
        // показываем предупреждение если создается заказ не установив адрес
        isWarningAddress: false,
        // баннер куда будет прокручивать при ошибке окно
        banner: null,
        // дата и время выполения заказа маркер прохождения проверки
        isWarningDateOrTime: false,
        // секция с датой и временем, куда будем возвращаться в случае ошибки
        timeSection: null,
        // // секция для слежки за измненными компонетами ошибок для скролла
        // inputInError: null,
        refValues: null,
      }
    },

    computed: {
      ...mapState('orders', ['currentOrder', 'orders']),
      buttonLabel() {
        return this.$route.params.hasOwnProperty('idOrder')
          ? 'редактировать заказ'
          : 'создать заказ'
      }
    },

    methods: {
      ...mapActions('orders', ['createOrder', 'editOrder']),
      fnValidateTitle(val) {
         return val !== null && val !== '' || 'заполните поле пожалуйста'
      },
      fnValidateLength(val) {
        return val.length > 0 && val.length < 100 || 'длина символов до 100'
      },
      fnValidateBody(val) {
        return val.length > 0 && val.length < 300 || 'длина символов до 300'
      },
      fnValidatePrice(val) {
        val = String(val)
        return val.length > 0 && val.length < 10 || 'длина символов до 10'
      },

      // метод общей валидации инпутов и прокрутки к нужному
      // находим элемент в котором ошибка и прокручиваем скрол к нему
      validateScrollInput() {
        // берем все значения инпутов и референсов
        const refValues = Object.values(this.$refs);
        // находим инпут в котором произошла ошибка
        const inputInError = refValues.find(input => input.innerError);
        // скроллимся к этому инпуту
        console.log('inputInError: ', inputInError);
        if (inputInError) {
          inputInError.$el.scrollIntoView({behavior: 'smooth'});
        }
      },

      onSubmit() {

        // Создание заказа
        if (this.create) {

          // тут будут проверки
          // проверка установлен ли адрес заказа
          if(!this.savedAddress) {
            this.isWarningAddress = true;
            // скролим для того чтобы установить скрол к карте
            this.banner.scrollIntoView({behavior: 'smooth'});
            return;
          }

          this.isWarningAddress = false;

          // проверка установлена ли дата и время выполнения заказа
          if (!this.order.dueDate || !this.order.dueTime) {
            this.isWarningDateOrTime = true;
            // console.log(this.timeSection);
            this.timeSection.scrollIntoView({behavior: 'smooth'});
            return;
          }

          this.isWarningDateOrTime = false;

          // если установлен адрес то его мерджим с другими параметрами в запросе
          const order = {
            ...this.order,
            coords: this.center
          };

          console.log('order: ', order);



          this.$q.loading.show({
            spinner: QSpinnerGears,
            spinnerColor: 'red',
            message: 'Идёт загрузка'
          })

          // запрос на сервер
          this.createOrder(order)
            .then(() => {
              // успешный ответ
              this.$q.loading.hide()
              this.$router.push({name: 'index'})
            })
            .catch((error) => {
              const items = error.map(er => `<li>${er}</li>`).join('')
              const listErrors = `<ul>${items}</ul>`
              this.$q.loading.hide()
              this.$q.dialog({
                title: 'Ошибка',
                message: listErrors,
                html: true,
                ok: 'ок',
                persistent: true
              }).onOk(() => {
                console.log(112)
              })
            })
        } else {
          console.log('редактирование')
          this.editOrder(order)
          this.$router.push('/orders')
        }

      },

      // колбек устанавливающий маркер и карту согласно координатам
      setMapAndMarkerPosition(e) {
          const { lat, lng } = e.latlng;
          const coords = [lat, lng];
          this.center = coords;
          this.markerLatLng = coords;
      },

      // устанавливаем слушатель события клик для карты
      addEventListenerMap() {
        this.map.on('click', (e) => this.setMapAndMarkerPosition(e));
      },

      // отменяем слушателя событий для карты
      removeEventListenerMap() {
        this.map.off('click');
      },

      // инициализация всего
      doSomethingOnReady() {
        // инициализация карты маркера и попапа
        this.map = this.$refs.map.mapObject;
        this.marker = this.$refs.marker.mapObject;
        this.popup = this.$refs.popup.mapObject;
        // установка обработчика события карты
        this.addEventListenerMap();
        // удаляем событие клик с маркера
        this.marker.off('click');
      },

      // Устанавливаем адрес для заказа отключив слушателя карты
      setAddressOrder() {
        // удаляем обработчик с карты
        this.removeEventListenerMap();
        this.savedAddress = true;
        this.marker.openPopup();
      },

      // Изменить адрес выполнения заказа
      changeAddressOrder() {
        // добавляем обработчик
        this.addEventListenerMap();
        this.marker.closePopup();
        this.savedAddress = false;
      }
    },

    watch: {
      refValues: {
        handler: function (val, oldVal) {
          console.log('val: ', val);
          console.log('oldValue: ', oldVal);
        },
        deep: true
      },
    },

    created() {
      // промис для работы с картой
      new Promise((resolve, reject) => {
        // Эта хуйня нужна чтобы маркер импортировался ормально
          L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
          });

          if(!("geolocation" in navigator)) {
            reject(new Error('Geolocation is not available.'));
          }

          navigator.geolocation.getCurrentPosition((position) => {
            resolve(position.coords);
          }, (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          });
      })
        .then(coords => {
          const { latitude, longitude } = coords;
          const position = [latitude, longitude]
          this.center = position;
          this.markerLatLng = position;
          //  console.log(this.$refs)
        })
    },

    mounted() {
      const idOrder = this.$route.params.idOrder

      if (this.$route.params.hasOwnProperty('idOrder')) {
        this.order = {...this.orders.find(order => order.id === idOrder)}
        this.create = false
        this.edit = true
      }


      // Секции куда будем возрвщаться в случае ошибки
      this.banner = this.$refs.banner.$el;
      this.timeSection = this.$refs.timeSection;


      // DO
      // this.$nextTick(() => {
      //   // this.map = this.$refs.map.mapObject // work as expected
      //         this.refValues = this.$refs;

      // console.log(this.$refs);
      // })
    }
  }

</script>

<style scoped>

  .map {
    width: 100%;
  }

  .mapButtons {
    display: flex;
    justify-content: space-between;
  }

</style>

