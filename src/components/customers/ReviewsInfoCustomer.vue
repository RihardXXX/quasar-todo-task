<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Отзывы</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item
        v-for="review in reviews"
        :key="review.id"
        class="q-my-sm"
      >
        <q-item-section avatar>
          <q-avatar
            color="primary"
            text-color="white"
          >
            <!--                {{ review.letter }}-->
            {{ review.name }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ review.name }}
          </q-item-label>
          <q-item-label
            caption
            lines="1"
          >
            {{ review.body }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon
            name="chat_bubble"
            color="gray"
          />
        </q-item-section>
      </q-item>

    </q-list>

  </div>
</template>

<script>

  export default {
    name: 'ReviewsInfoCustomer',
    props: {
      reviews: {
        type: Array,
        required: true
      }
    }
  }

</script>
