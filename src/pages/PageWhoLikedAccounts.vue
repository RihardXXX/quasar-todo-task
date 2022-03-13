<template>
  <q-page>
    <q-banner
      inline-actions
      rounded
      class="bg-orange text-white text-center"
    >
      список аккаунтов кто лайкал анкету
    </q-banner>
    <q-list
      bordered
      padding
      separator
      :style="{minHeight: '100vh'}"
    >

      <template
        v-if="whoLikedList.length"
      >
        <!--        <transition-group-->
        <!--          appear-->
        <!--          enter-active-class="animated backInUp"-->
        <!--          leave-active-class="animated backInUp"-->
        <!--        >-->
        <CustomerItem
          v-for="account in whoLikedList"
          :key="account.id"
          :slug="account.id"
          :rating="account.rating"
          :username="account.username"
          :reviews="account.reviews"
          :role="account.role"
          class="customerList"
        />
        <!--       </transition-group>-->
      </template>

<!--      <q-infinite-scroll-->
<!--        @load="loadMore"-->
<!--        ref="infiniteScroll"-->
<!--      >-->
<!--        <template v-slot:loading>-->
<!--          <div class="row justify-center q-my-md">-->
<!--            <q-spinner-dots-->
<!--              color="primary"-->
<!--              size="70px"-->
<!--            />-->
<!--          </div>-->
<!--        </template>-->
<!--      </q-infinite-scroll>-->

      <div v-if="!whoLikedList.length">
        <q-banner dense class="bg-grey-3 text-center q-ma-md">
          <h5>Ничего не найдено</h5>
        </q-banner>
      </div>

    </q-list>
  </q-page>
</template>

<script>
  import CustomerItem from 'components/customers/CustomerItem';
  import {mapActions, mapState} from 'vuex';

  export default {
    name: 'PageWhoLikedAccounts',
    components: {
      CustomerItem,
    },
    // data() {
    //   return {
    //     whoLikedList: [
    //       1,
    //       2,
    //       3
    //     ]
    //   }
    // },
    computed: {
      ...mapState('authorization', ['isLoading', 'error', 'whoLikedList'])
    },
    methods: {
      ...mapActions('authorization', ['getWhoLikedAccountsList']),
      // бесконечная загрузка списка
      loadMore (index, done) {

        // console.log('load scroll')
        // console.log('index: ', index)
        // console.log('done: ', done)
        // Чтобы первый раз не пролетел мимо скролл))
        // if (this.myOrders.length === 0) {
        //   // console.log('метка')
        //   this.$refs.infiniteScroll.resume()
        //   done()
        //   return
        // }
        // //
        // // // console.log('load scroll112')
        // //
        // // Если с количество найденных заказов больше чем прогружено то запускаем заново
        // if (this.ordersCount > this.myOrders.length) {
        //   // console.log('this.accountsList.length1: ', this.accountsList.length)
        //   this.$store.commit('orders/setOffset', 20)
        //   this.loadMyOrders()
        //     .then(() => {
        //       // console.log('done 1')
        //       done()
        //     })
        // } else if (this.myOrders.length >= this.ordersCount) {
        //   // console.log('this.accountsList.length2: ', this.accountsList.length)
        //   // console.log('this.accountsList.length2: ', this.accountsList)
        //   this.$refs.infiniteScroll.stop()
        // }
      },
    },
    mounted() {
      this.$store.commit('authorization/resetStateAccounts')
      const { id } = this.$route.params
      console.log('id: ', id)
      this.getWhoLikedAccountsList(id)
    }
  }

</script>
