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
        <span>рейтинг</span>
        <div
          class="q-ml-md"
          :class="colorStar"
        >
          <q-icon
            v-for="i in rating"
            :key="i"
            name="star"
          />
        </div>
      </div>
      <q-icon name="reviews" />
      отзывы

      <br>
      подробнее
    </q-card-actions>
  </q-card>
</template>

<script>
  export default {
    name: 'CustomerItem',
    props: {
      username: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true
      }
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
