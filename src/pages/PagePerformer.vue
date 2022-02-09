<template>
  <q-page class="q-pa-md">
    page individual performer
  </q-page>
</template>

<script>
  export default {
    name: 'PagePerformer',
    mounted() {
      const { id } = this.$route.params;

      console.log('id: ', id);
    }
  }
</script>
