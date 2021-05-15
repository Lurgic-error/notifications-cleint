<template>
  <div class="container">
    <b-alert v-if="error" class="my-3" variant='danger'>{{ error }} </b-alert>

    <h4 class="text-capitalize mb-3">Notify subscribers</h4>
    <b-form @submit.prevent="sendNotification">
      <b-form-group label='Title'>
        <b-form-input v-model='title' placeholder='enter notification title' required></b-form-input>
      </b-form-group>
      <b-form-group label='Body'>
        <b-form-textarea v-model="body" placeholder="enter notification body" required></b-form-textarea>
      </b-form-group>
      <b-button type='submit' variant='primary'>Send Notification</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {

    name: 'send-notification',

    data() {
      return {
        title: "",
        body: "",
        error: null
      }
    },

    methods: {

      async sendNotification() {
        const res = await fetch("http://localhost:5000/notify-subs", {
          method: "POST",
          body: JSON.stringify({
            title: this.title,
            body: this.body
          }),
          headers: {
            "content-type": "application/json",
          },
        });

        const data = await res.json()
        console.log(`data`, data)
      }
    }


  }
</script>

<style scoped>

</style>