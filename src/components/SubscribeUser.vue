<template>
  <div class="container subscribe-user my-3">
    <b-alert v-if="error" class="my-3" variant='danger'>{{ error }} </b-alert>
    <h3 class="mb-3">Subscribe to get notifications</h3>
    <b-form @submit.prevent='subscribe'>
      <b-form-group label="Username">
        <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="enter your username"
          v-model="username" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Subscribe</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {

    name: "subscribe-user",

    data() {
      return {
        username: "",
        subscription: null,
        error: null,
        publicVapidKey: "BDU4UurBAZNurGxFFJCK9GDBJ-z7boocpepbMMGD6jVnk5FlIKr4vKMhW8q9UVAQPJ9Z2iKuFPcgtz9fCfqcp7w",
      }
    },

    methods: {

      urlBase64ToUint8Array(base64String) {
        const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      },

      async subscribe() {
        if (!'serviceWorker' in navigator) {
          this.error = 'Service worker not available.'
        }
        const permission = await Notification.requestPermission()
        if (permission == "granted") {
          const registration = await navigator.serviceWorker.ready
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey),
          });
          const data = JSON.stringify({
            subscription,
            username: this.username
          })
          console.log(`data`, data)
          const res = await fetch("http://localhost:5000/create", {
            method: "POST",
            body: data,
            headers: {
              "content-type": "application/json",
            },
          });
        }
        this.$router.push({
          name: "home"
        })

      }
    }

  }
</script>

<style>

</style>