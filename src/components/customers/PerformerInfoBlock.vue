<template>
  <q-card>
    <q-item class="flex justify-between">
      <q-avatar rounded size="48px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
        <q-badge floating color="teal">
          заявка
        </q-badge>
      </q-avatar>
      <q-item
        clickable
        v-ripple
        bordered
        class="q-bg-secondary"
        :to="{ path: `/performer/${id}` }"
      >
        <q-btn
          icon="send"
          label="на страницу мастера"
        />
      </q-item>
    </q-item>
    <q-item>
        {{name}}
    </q-item>
<!--    <q-item-section-->
<!--      v-if="isCustomer"-->
<!--    >-->
<!--&lt;!&ndash;      <q-btn&ndash;&gt;-->
<!--&lt;!&ndash;        color="purple"&ndash;&gt;-->
<!--&lt;!&ndash;        label="принять"&ndash;&gt;-->
<!--&lt;!&ndash;        @click="okPerformer"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--&lt;!&ndash;      <q-btn&ndash;&gt;-->
<!--&lt;!&ndash;        color="deep-orange"&ndash;&gt;-->
<!--&lt;!&ndash;        label="отклонить"&ndash;&gt;-->
<!--&lt;!&ndash;        class="q-mt-md"&ndash;&gt;-->
<!--&lt;!&ndash;        @click="cancelPerformer"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--    </q-item-section>-->

    <q-separator />
  </q-card>
</template>

<script>

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
      isCustomer() {
        return true
      }
    },
    methods: {
      // okPerformer() {
      //   // console.log('ok performer');
      //   this.$emit('acceptApplication', this.slug)
      // },
      // cancelPerformer() {
      //   // console.log('cancel performer')
      //   this.$emit('rejectApplication', this.slug)
      // }
    }
  }

</script>
