<template>
  <q-page class="q-pa-md">
    page individual performer
  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'PagePerformer',
    computed: {
      ...mapGetters('performers')
    },
    methods: {
      ...mapActions('performers', ['getInfoPerformer'])
    },
    mounted() {
      const { id } = this.$route.params;

      console.log('id: ', id);
      this.getInfoPerformer(id)
    }
  }
</script>
