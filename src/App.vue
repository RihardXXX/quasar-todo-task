<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'App',
    methods: {
      ...mapActions('authorization', ['authUser']),
    },
    mounted() {
      // проверка авторизации при каждом запросе
      this.authUser()
        .then(() => this.$router.push({path: '/'}).catch(() => {}));
    }
  }
</script>
