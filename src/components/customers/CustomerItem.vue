<template>
  <q-card class="my-card q-mt-md">
    <q-card-section>
      <div class="text-h6">
        <q-icon name="people" />
        {{username}}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>

      <div class="flex justify-start">
<!--        <span>рейтинг</span>-->
<!--        <div-->
<!--          class="q-ml-md"-->
<!--          :class="colorStar"-->
<!--        >-->
<!--          <q-icon-->
<!--            v-for="i in rating"-->
<!--            :key="i"-->
<!--            name="star"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex justify-start">-->
<!--        <span>отзывы</span>-->
<!--        <div-->
<!--          class="q-ml-md"-->
<!--        >-->
<!--          <q-icon-->
<!--            name="reviews"-->
<!--          />-->
<!--        </div>-->
<!--        <q-badge-->
<!--          v-if="reviews.length"-->
<!--          rounded-->
<!--          color="primary"-->
<!--          class="q-ml-md"-->
<!--          :label="reviews.length"-->
<!--        />-->
      </div>

      <q-btn
        class="q-mt-md"
        color="primary"
        label="Подробнее о клиенте"
        :to="{ path: `${role}/${slug}`}"
        exact
      />
    </q-card-actions>
  </q-card>
</template>

<script>
  export default {
    name: 'CustomerItem',
    props: {
      slug: {
        type: Number,
        required: true
      },
      username: {
        type: String,
        required: true,
      },
      role : {
        type: String,
        required: true
      }
      // rating: {
      //   type: Number,
      //   required: true
      // },
      // reviews: {
      //   type: Array,
      //   required: true,
      // }
    },
    computed: {
      colorStar() {
        if(this.rating > 7) {
          return 'text-positive'
        }else if(this.rating < 7 && this.rating > 4) {
          return 'text-warning'
        } else {
          return 'text-red'
        }
      }
    }
  }

</script>
