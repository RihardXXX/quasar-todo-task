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
      <q-item-label
        caption
      >
        кликни чтобы перейти на страницу мастера
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-btn
        color="purple"
        label="принять"
        @click="okPerformer"
      />
      <q-btn
        color="deep-orange"
        label="отклонить"
        class="q-mt-md"
        @click="cancelPerformer"
      />
    </q-item-section>
  </q-item>
</template>

<script>

  export default {
    name: 'PerformerInfoBlock',
    props: {
      slug: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    methods: {
      okPerformer() {
        console.log('ok performer')
      },
      cancelPerformer() {
        console.log('cancel performer')
      }
    }
  }

</script>
