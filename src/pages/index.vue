<template>
  <q-page padding class="row">
    <div class="col-lg-3 col-md-5 col-xl-2 col-xs-12" id="card">
      <card/>
    </div>
    <div class="col-lg-3 col-md-5 col-xl-2 col-xs-12" id="start">
      <div id="new">
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
            v-model="contact.name" @keyup="checkName"/>
          </q-field>
          <q-field :error="error" error-label="Sorry, that email already exist.">
            <q-input type="email"
            float-label="Email" clearable autocomplete
            :loading="loadingEmail" @focus="loadingEmail = true"
            @blur="loadingEmail = false"
            v-model="contact.email" @keyup="checkEmail"/>
          </q-field>
          <q-field :error="error" error-label="Sorry, that phone already exist.">
            <q-input type="tel"
            float-label="Phone" clearable autocomplete
            :loading="loadingPhone" @focus="loadingPhone = true"
            @blur="loadingPhone = false"
            v-model="contact.phone" @keyup="checkPhone"/>
          </q-field>
        </q-card-main>
        <q-card-separator/>
        <q-card-actions>
          <q-btn type="submit" id="me" color="primary" @click="$store.commit('addContact', contact)">Flip</q-btn>
        </q-card-actions>
        </form>
        </q-card>
      </div>
      <div id="add" @click="flipAddOut">
        <div class="addbg" style="background-image:url('statics/img_452165.png')">
          <q-tooltip>
            Click here to add a new contact
          </q-tooltip>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus">
@import '~variables'
.row .col-md-6
  height 22.4pc
#start
  position relative
.addbg
  background center no-repeat
  background-size 50%
  width 100%
  height 100%
#add
  background $primary
  position absolute
  height 22.4pc
  width 100%
  cursor pointer
  z-index 2
  transform-style preserve-3d
  transition all 0.9s ease-in-out
#new
  overflow hidden
  position absolute
  z-index 1
  background $light
  width 100%
  height 22.4pc
  transition: all 0.9s ease-in-out
  transform: rotateX(-180deg)
  transform-style preserve-3d
#new .q-btn
  display block
  margin 0 auto
  padding 10px 20px
.q-card-media
  padding: 20px
.q-card-media img
  margin: 0 auto
  width: auto
.q-card-actions .call
  border-right: 0.1px solid #000
  padding: $pad
.q-card-actions .mail
  border-left: 0.1px solid #000
.menu
  padding: 15px
#card
  position relative
  display none
  transition: all 0.9s ease-in-out
  transform-style preserve-3d
  transform rotateX('-180deg')
</style>

<script>
import Card from 'components/card'
export default {
  name: 'PageIndex',
  components: {
    Card
  },
  data () {
    return {
      url: 'http://1.1.1.195/upload.php',
      loadingName: false,
      loadingEmail: false,
      loadingPhone: false,
      contact: {
        name: '',
        email: '',
        phone: '',
        status: false
      },
      error: false
    }
  },
  methods: {
    flipAddOut: () => {
      document.getElementById('add').style.transform = 'rotateX(-180deg)'
      document.getElementById('new').style.transform = 'rotateX(360deg)'
      document.getElementById('new').style.zIndex = '3'
      document.getElementById('add').style.zIndex = '2'
      document.getElementById('new').style.height = 'unset'
    },
    flipFormOut: (e) => {
      e.preventDefault()
      document.getElementById('new').style.transform = 'rotateX(-180deg)'
      document.getElementById('card').style.display = 'block'
      document.getElementById('new').style.height = '22.4pc'
      document.getElementById('add').style.zIndex = '4'
      document.getElementById('add').style.transform = 'rotateX(360deg)'
    }
  },
  computed: {
  }
}
</script>
