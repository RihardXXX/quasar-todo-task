<template>
  <q-dialog v-model="show" persistent>
    <q-card>
      <q-card-section class="text-center q-pb-none">
        <q-avatar
          icon="error_outline"
          color="orange"
          text-color="white"
        />
      </q-card-section>
      <q-card-section>
          <span
            class="q-ml-sm"
          >
            {{label}}
          </span>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          flat
          :label="buttonCancel"
          color="purple"
          v-close-popup
        />
        <q-btn
          flat
          :label="buttonOk"
          color="purple"
          v-close-popup
          @click="onOk"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>

  export default {
    name: 'ConfirmModal',
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      label: {
        type: String,
        required: true
      },
      buttonCancel: {
        type: String,
        required: true
      },
      buttonOk: {
        type: String,
        required: true
      }
    },
    methods: {
      onOk() {
        this.$emit('onOk')
      }
    }
  }

</script>
