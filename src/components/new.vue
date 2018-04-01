<template>
    <q-card>
      <form action="" @submit="flipFormOut">
    <q-card-media>
      <img src="statics/download (1).png" alt="" id="img">
    </q-card-media>
    <q-uploader id="upload" :url="url" extensions=".gif,.jpg,.jpeg,.png"/>
    <q-card-separator/>
    <q-card-main>
      <q-field :error="error" error-label="Sorry, that name already exist.">
        <q-input type="text"
        float-label="Name" clearable autocomplete
        :loading="loadingName" @focus="loadingName = true"
        @blur="loadingName = false"
        v-model="contact.name" @keydown="check"/>
      </q-field>
      <q-field :error="error" error-label="Sorry, that email already exist.">
        <q-input type="email"
        float-label="Email" clearable autocomplete
        :loading="loadingEmail" @focus="loadingEmail = true"
        @blur="loadingEmail = false"
        v-model="contact.email"/>
      </q-field>
      <q-field :error="error" error-label="Sorry, that phone already exist.">
        <q-input type="tel"
        float-label="Phone" clearable autocomplete
        :loading="loadingPhone" @focus="loadingPhone = true"
        @blur="loadingPhone = false"
        v-model="contact.phone"/>
      </q-field>
    </q-card-main>
    <q-card-separator/>
    <q-card-actions>
      <q-btn type="submit" id="me" color="primary" @click="$store.commit('addContact', contact)">Flip</q-btn>
    </q-card-actions>
    </form>
    </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      url: 'http://1.1.1.195/upload.php',
      loadingName: false,
      loadingEmail: false,
      loadingPhone: false,
      contact: {
        name: '',
        email: '',
        phone: ''
      },
      error: true
    }
  },
  computed: {
  },
  methods: {
    flipFormOut: (e) => {
      e.preventDefault()
      document.getElementById('me').style.transform = 'rotateX(-360deg)'
    }
  }
}
</script>

<style>
</style>
