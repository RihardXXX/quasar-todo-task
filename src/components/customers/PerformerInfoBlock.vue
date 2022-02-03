<template>
  <q-item
  >
    <q-item-section side>
      <q-avatar rounded size="48px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
        <q-badge floating color="teal">
          заявка
        </q-badge>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        {{name}}
      </q-item-label>
      <q-item
        clickable
        v-ripple
        bordered
        class="q-bg-secondary"
        :to="{ path: `/performer/${slug}` }"
      >
        <q-btn
          icon="send"
          label="на страницу мастера"
        />
      </q-item>
    </q-item-section>
    <q-item-section
      v-if="isCustomer"
    >
<!--      <q-btn-->
<!--        color="purple"-->
<!--        label="принять"-->
<!--        @click="okPerformer"-->
<!--      />-->
<!--      <q-btn-->
<!--        color="deep-orange"-->
<!--        label="отклонить"-->
<!--        class="q-mt-md"-->
<!--        @click="cancelPerformer"-->
<!--      />-->
    </q-item-section>
  </q-item>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'PerformerInfoBlock',
    props: {
      slug: {
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
      okPerformer() {
        // console.log('ok performer');
        this.$emit('acceptApplication', this.slug)
      },
      cancelPerformer() {
        // console.log('cancel performer')
        this.$emit('rejectApplication', this.slug)
      }
    }
  }

</script>
