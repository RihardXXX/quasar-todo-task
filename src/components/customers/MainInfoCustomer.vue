<template>
  <div>
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
          {{ username }}
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
          {{ payment }}
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
              v-for="i in rating"
              :key="i"
              name="star"
            />
          </div>
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>

  export default {
    name: 'MainInfoCustomer',
    props: {
      username: {
        type: String,
        required: true
      },
      payment: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      }
    },
    computed: {
      colorStar() {
        const { rating } = this
        if(rating > 7) {
          return 'text-positive'
        }else if(rating < 7 && rating > 4) {
          return 'text-warning'
        } else {
          return 'text-red'
        }
      },
    }
  }

</script>
