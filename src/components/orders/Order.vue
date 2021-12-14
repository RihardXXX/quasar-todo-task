<template>
  <q-item
    clickable
    exact
    :class="selectedPerformer ? 'bg-light-green-3' : 'bg-grey-1'"
    :to="{ path: `order/${slug}`}"
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
      price: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        required: true
      }
    },
    computed: {
      colorBadge() {
        return this.selectedPerformer ? 'positive' : 'purple'
      }
    }
  }
</script>
