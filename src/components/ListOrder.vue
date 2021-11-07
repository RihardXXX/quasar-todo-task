<template>
  <div>
    <q-list
      bordered
      padding
      separator
    >
      <q-item-label header>
        Общий список заказов
      </q-item-label>

      <template
        v-if="true"
      >

          <q-item
            v-for="order in orders"
            :key="order.id"
            clickable
            exact
            :class="order.selectedPerformer ? 'bg-light-green-3' : 'bg-grey-1'"
            :to="{ path: `order/${order.id}`}"
          >
            <q-item-section top avatar>
                <q-avatar
                  color="primary"
                  text-color="white"
                  icon="work"
                />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{ order.title }}
              </q-item-label>
              <q-item-label caption>
                {{ order.description }}
              </q-item-label>
              <q-item-label caption>
                Подробнее ...
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-badge
                v-if="order.selectedPerformer"
                color="warning"
                label="в работе"
                class="q-mb-sm"
                rounded
              />
              <q-badge
                color="positive"
                :label="`цена: ${order.price}`"
              />
              <q-item-label
                caption
                class="q-mt-sm"
              >
                рейтинг автора
              </q-item-label>

              <div class="text-orange">
                <q-icon name="star" />
                <q-icon name="star" />
                <q-icon name="star" />
              </div>
            </q-item-section>
          </q-item>

      </template>

    </q-list>
  </div>
</template>

<script>
  export default {
    name: 'ListOrder',
    props: {
      orders: {
        type: Array,
        required: true
      }
    },
    computed: {

    }
  }
</script>
