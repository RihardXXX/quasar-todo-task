<template>
  <q-item
    clickable
    exact
    :class="backgroundOrder"
    :to="{ path: `orders/${slug}`}"
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
        {{ title }}
      </q-item-label>
      <q-item-label caption>
        {{ description }}
      </q-item-label>
      <q-item-label caption>
        Подробнее ...
      </q-item-label>
    </q-item-section>

    <q-item-section side top>

      <q-badge
        :color="colorBadge"
        :label="status"
        class="q-mb-sm"
        rounded
      />
      <q-badge
        color="positive"
        :label="`цена: ${price}`"
      />
<!--      <q-item-label-->
<!--        caption-->
<!--        class="q-mt-sm"-->
<!--      >-->
<!--        рейтинг автора-->
<!--      </q-item-label>-->

<!--      <div class="text-orange">-->
<!--        <q-icon name="star" />-->
<!--        <q-icon name="star" />-->
<!--        <q-icon name="star" />-->
<!--      </div>-->
    </q-item-section>
  </q-item>
</template>

<script>
  export default {
    name: 'Order',
    props: {
      slug: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      selectedPerformer: {
        type: Boolean,
        required: true
      },
      price: [String, Number],
      status: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        colorPaletteStatus: new Map([
          ['свободен', 'bg-grey-1'],
          ['в работе', 'bg-indigo-2'],
          ['выполнено', 'bg-light-green-3'],
        ])
      }
    },
    computed: {
      colorBadge() {
        return this.selectedPerformer ? 'positive' : 'purple'
      },
      // динамическая установка класса для заказа в зависимости от статуса
      backgroundOrder() {
        console.log(this.status)
        // 'bg-light-green-3' : 'bg-grey-1', 'bg-purple-11'
        // Здесь мы генерируем определенный класс согласно статусу заказа
        return this.colorPaletteStatus.get(this.status)
      }
    }
  }
</script>
