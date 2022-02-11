<template>
  <q-page class="q-pa-md q-gutter-sm centerContent">
    <q-card class="my-card" :style="{ width: '50%' }">

      <q-list>

        <q-item class="flex-center">
          <q-item-section avatar>
            <q-btn
              round
              color="deep-orange"
              icon="favorite_border"
              class="text-center"
              @click="setFavorite"
            >
              {{ countLikes }}
              <q-tooltip anchor="top middle" self="center middle">
                поставить лайк
              </q-tooltip>
            </q-btn>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="green"
              size="xl"
              name="face"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              Имя
            </q-item-label>
            <q-item-label caption>
              {{ username }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="red"
              size="xl"
              name="settings_accessibility"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              Роль
            </q-item-label>
            <q-item-label caption>
              {{ role }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              color="amber"
              size="xl"
              name="history"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>о себе</q-item-label>
            <q-item-label caption>
              {{ bio || '-' }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    dfdfd
  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'PagePerformer',
    computed: {
      ...mapGetters('performers', ['username', 'bio', 'countLikes', 'role'])
    },
    methods: {
      ...mapActions('performers', ['getInfoPerformer']),
      // поставить лайк анкете
      setFavorite() {
        console.log('поставить лайк анкете')
      }
    },
    mounted() {
      const { id } = this.$route.params;

      console.log('id: ', id);
      this.getInfoPerformer(id)
    }
  }
</script>

<style scoped lang="scss">
  .centerContent {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
</style>
