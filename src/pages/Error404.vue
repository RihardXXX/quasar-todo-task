<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">
        Упс ошибочка
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Назад на главную"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
