<template>
    <div style="width: 100%">

      <h6
        class="text-center no-margin"
      >
        Чат с клиентом
      </h6>

      <q-separator />

      <div class="q-pa-md">

        <q-chat-message
          name="Я"
          avatar="https://cdn.quasar.dev/img/avatar2.jpg"
          :text="['сегодня работаешь?']"
          sent
        />
        <q-chat-message
          :name="nameCustomer"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['Да заебали вы меня']"
        />

      </div>

    </div>
</template>

<script>

  export default {
    name: 'ChatFromCurrentCustomer',
    props: {
      nameCustomer: {
        type: String,
        required: true
      }
    }
  }

</script>
