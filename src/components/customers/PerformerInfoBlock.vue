<template>
  <q-item
    clickable
    v-ripple
    :to="{ path: `/performer/${slug}`}"
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
      <q-item-label caption>
        кликни чтобы перейти на страницу мастера
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      заявка поданна 15:45
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
    }
  }

</script>
