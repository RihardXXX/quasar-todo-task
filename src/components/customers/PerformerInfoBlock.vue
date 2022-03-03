<template>
  <q-card>
    <q-item class="flex justify-between">
      <q-avatar rounded size="48px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
        <q-badge floating color="teal">
          заявка
        </q-badge>
      </q-avatar>
        <q-btn
          icon="send"
          label="на страницу мастера"
          :to="{ path: `/account/${id}` }"
        />
    </q-item>
    <q-item class="flex justify-between">
        {{name}}
        <q-btn
          v-if="isOrderOwner"
          color="purple"
          label="сделать победителем"
          @click="okPerformer"
        />
    </q-item>

    <q-separator />
  </q-card>
</template>

<script>

import {mapGetters, mapState} from 'vuex';

export default {
    name: 'PerformerInfoBlock',
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapState('orders', ['currentOrder']),
      ...mapGetters('authorization', ['idUser']),
      // Является ли создателем заказа это лицо
      isOrderOwner() {
        return this.idUser === this.currentOrder.user.id
      }
    },
    methods: {
      okPerformer() {
        this.$emit('acceptApplication', this.id)
      },
    }
  }

</script>
