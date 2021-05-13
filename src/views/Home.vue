<template>
  <div class="container h-100 d-flex justify-content-center">
    <div class="container-fluid">
      <h3 class="my-3">Vandu notifications</h3>

      <send-notification></send-notification>
    </div>
  </div>
</template>

<script>
import SendNotification from '@/components/SendNotification.vue'
  export default {
  components: { SendNotification },
    name: 'home'
  }
</script>

<style lang="scss" scoped>

</style>