<template>
  <q-page class="container">
    <h5 class="text-center q-mb-none">Создать заказ</h5>
    <div class="q-pa-md">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="order.title"
          label="имя заказа"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidateLength]"
        />
        <q-input
          filled
          v-model="order.description"
          label="краткое описание"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidateLength]"
        />
        <q-input
          type="textarea"
          filled
          v-model="order.body"
          label="общая информация о заказе"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidateBody]"
        />
        <q-input
          filled
          v-model="order.address"
          label="адрес"
          clearable
          lazy-rules
          :rules="[fnValidateTitle, fnValidateLength]"
        />

        <template v-if="center.length && markerLatLng.length">
          <l-map
            style="height: 400px"
            :zoom="zoom"
            :center="center"
            :options="leafletMapOptions"
          >
            <l-tile-layer
              :url="url"
              :attribution="attribution"
            ></l-tile-layer>
            <l-marker
              :lat-lng="markerLatLng"
            ></l-marker>
          </l-map>
        </template>


        <div class="q-pa-md">
          <q-option-group
            :options="options"
            type="checkbox"
            v-model="order.category"
          />
        </div>

        <div class="q-pa-md text-center">
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
  import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

  export default {
    name: 'OrderCreate',
    components: {
      LMap,
      LTileLayer,
      LMarker
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
        }
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
        console.log(val)
        val = String(val)
        return val.length > 0 && val.length < 10 || 'длина символов до 10'
      },

      onSubmit() {

        if (this.create) {

          this.$q.loading.show({
            spinner: QSpinnerGears,
            spinnerColor: 'red',
            message: 'Идёт загрузка'
          })

          // запрос на сервер
          this.createOrder(this.order)
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
        })
    },
    mounted() {
      const idOrder = this.$route.params.idOrder
      if (this.$route.params.hasOwnProperty('idOrder')) {
        this.order = {...this.orders.find(order => order.id === idOrder)}
        this.create = false
        this.edit = true
      }
    }
  }
</script>

<style scoped>

  .map {
    width: 100%;
  }

</style>

