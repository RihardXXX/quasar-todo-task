<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">

      <q-list>

        <MainInfoCustomer
          v-if="!isLoading"
          :rating="currentCustomer.rating || 5"
          :payment="currentCustomer.payment || '-'"
          :username="currentCustomer.username || '-'"
        />
        <div
          class="flex justify-center"
          v-else
        >
          <q-spinner-hourglass
            color="purple"
            size="4em"
          />
        </div>

      </q-list>


    </q-card>

    <q-card
      class="my-card q-mt-md"
    >

    <ReviewsInfoCustomer
      v-if="!isLoading"
      :reviews="currentCustomer.reviews || []"
    />
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

      <OrdersInfoCustomer
        v-if="!isLoading"
        :orders="currentCustomer.orders || []"
      />
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
      В разработке
    </q-card>


  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MainInfoCustomer from "components/customers/MainInfoCustomer";
import ReviewsInfoCustomer from "components/customers/ReviewsInfoCustomer";
import OrdersInfoCustomer from "components/customers/OrdersInfoCustomer";

export default {
  name: 'PageCustomer',
  components: {
    MainInfoCustomer,
    ReviewsInfoCustomer,
    OrdersInfoCustomer
  },
  computed: {
    ...mapState('customers', ['currentCustomer', 'isLoading']),
    slug() {
      return this.$route.params.slug
    },
    reviews() {
      return this.currentCustomer.reviews
    }
  },
  methods: {
    ...mapActions('customers', ['getCurrentCustomer']),
  },
  mounted() {
    const { slug } = this.$route.params
    this.getCurrentCustomer(slug)
  }
}
</script>

