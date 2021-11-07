<template>
  <q-page class="flex flex-center">
    Page Order slug {{ slug }}
  </q-page>
</template>

<script>
export default {
  name: 'PageOrder',
  computed: {
    slug() {
      return this.$route.params.slug
    }
  },
}
</script>
