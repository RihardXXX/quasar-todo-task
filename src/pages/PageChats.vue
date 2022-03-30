<template>
  <div>
    Page Chats
  </div>
</template>

<script>
  export default {
    name: 'PageChats',

    mounted() {
      const { userId } = this.$route.params;
      console.log('userId: ', userId);
    }
  }
</script>
