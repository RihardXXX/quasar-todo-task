<template>
  <q-page class="q-pa-md">
    <q-banner class="bg-primary text-white text-center">
      {{ currentOrder.title }}
    </q-banner>

    <q-card class="my-card">

      <q-list>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="subtitles"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ currentOrder.description }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="description"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label caption>
              {{ currentOrder.body }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="primary"
              name="price_change"
            />
          </q-item-section>
          <q-item-section>
            <q-badge
              color="positive"
              outline
              style="max-width: fit-content"
              :label="`цена: ${currentOrder.price}`"
            />
          </q-item-section>
        </q-item>

      </q-list>
    </q-card>
<!--    Current order:  {{ currentOrder }}-->
  </q-page>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'PageOrder',
    data() {
      return {
        iconsList: [
          'description',
        ]
      }
    },
    computed: {
      ...mapState('orders', ['currentOrder']),
      slug() {
        return this.$route.params.slug
      }
    },
    methods: {
      ...mapActions('orders', ['getCurrentOrder'])
    },
    mounted() {
      const { slug } = this.$route.params
      this.getCurrentOrder(slug)
    }
  }
</script>
