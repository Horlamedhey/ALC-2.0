<template>
  <q-page padding class="row">
      <q-card v-for="contact in added" :key="contact.id" :id="contact.ID" class="cards animated flip" text-color="white">
          <q-card-actions class="float-right">
            <q-fab icon="more_vert" direction="down">
              <q-fab-action color="primary" @click="remove()" icon="delete"/>
              <q-fab-action color="secondary" @click="edit()" icon="edit"/>
            </q-fab>
          </q-card-actions>
          <q-card-media>
            <img src="statics/quasar-logo.png" alt="">
          </q-card-media>
          <q-card-title>
            {{contact.name}}
          <q-card-separator />
          </q-card-title>
          <q-card-main>
            <p>{{contact.email}}</p>
            <p>{{contact.phone}}</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions class="row">
            <q-btn class="col call" flat><i class="fa fa-phone"></i></q-btn>
            <q-btn class="col mail" flat><i class="fa fa-envelope"></i></q-btn>
          </q-card-actions>
        </q-card>
    <div class="col-lg-3 col-md-5 col-xl-2 col-xs-12" id="start">
      <div id="new" class="animated flip">
        <q-card>
          <span id="span">
            <p>Select an image:</p>
            <q-uploader id="upload" :url="url" extensions=".gif,.jpg,.jpeg,.png"/>
          </span>
        <q-card-separator/>
        <q-card-main>
          <q-field :error="error" error-label="Sorry, that name already exist.">
            <q-input type="text"
            float-label="Name" clearable autocomplete
            :loading="loadingName" @focus="loadingName = true"
            @blur="loadingName = false"
            v-model="add.name"/>
          </q-field>
          <q-field :error="error" error-label="Sorry, that email already exist.">
            <q-input type="email"
            float-label="Email" clearable autocomplete
            :loading="loadingEmail" @focus="loadingEmail = true"
            @blur="loadingEmail = false"
            v-model="add.email"/>
          </q-field>
          <q-field :error="error" error-label="Sorry, that phone already exist.">
            <q-input type="tel"
            float-label="Phone" clearable autocomplete
            :loading="loadingPhone" @focus="loadingPhone = true"
            @blur="loadingPhone = false"
            v-model="add.phone"/>
          </q-field>
        </q-card-main>
        <q-card-separator/>
        <q-card-actions>
          <q-btn @click="flipFormOut" type="submit" id="me" color="primary">Flip</q-btn>
        </q-card-actions>
        </q-card>
      </div>
      <div id="add" class="animated flip" @click="flipAddOut">
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
  height 22.4pc
.addbg
  background center no-repeat
  background-size 50%
  width 100%
  height 100%
#add
  background $primary
  position absolute
  height 22.4pc
  width 93%
  cursor pointer
  z-index 2
  transform-style preserve-3d
  transition all 0.9s ease-in-out
#new
  position absolute
  display none
  z-index 1
  background $info
  width 93%
  height 22.4pc
  padding-top 2pc
  transition: all 0.9s ease-in-out
  transform: rotateX(-180deg)
  transform-style preserve-3d
#new p, #new .q-uploader
  padding 0pc 1pc
#new .q-uploader
  margin-bottom 2pc
#new .q-btn
  display block
  margin 0.3pc auto
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
#cards
  position relative
  height fit-content
.cards
  height 22.4pc
cards_colors = ( red blue green yellow pink purple #1a1aff #993366 #66ffff #99cc00 #ff9900 #669900 teal #333300 #0099cc #ff00ff )
random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)
for num in (1..1000)
  #card-{num}
    background cards_colors[random(0, 16)]
.animated
  -webkit-animation-duration 1s
  animation-duration 1s
  -webkit-animation-fill-mode both
  animation-fill-mode both
.flip
  -webkit-backface-visibility visible
  backface-visibility visible
  -webkit-animation-name flip
  animation-name flip
@keyframes flip
  from
    -webkit-transform perspective(400px) rotate3d(0, 1, 0, -360deg)
    transform perspective(400px) rotate3d(0, 1, 0, -360deg)
    -webkit-animation-timing-function ease-out
    animation-timing-function ease-out
  40%
    -webkit-transform perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)
    transform perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)
    -webkit-animation-timing-function ease-out
    animation-timing-function ease-out
  50%
    -webkit-transform perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)
    transform perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)
    -webkit-animation-timing-function ease-in
    animation-timing-function ease-in
  80%
    -webkit-transform perspective(400px) scale3d(0.95, 0.95, 0.95)
    transform perspective(400px) scale3d(0.95, 0.95, 0.95)
    -webkit-animation-timing-function ease-in
    animation-timing-function ease-in
  to
    -webkit-transform perspective(400px)
    transform perspective(400px)
    -webkit-animation-timing-function ease-in
    animation-timing-function ease-in
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      add: {
        ID: 0,
        name: '',
        email: '',
        phone: ''
      },
      added: [],
      error: false,
      url: 'http://1.1.1.195/upload.php',
      loadingName: false,
      loadingEmail: false,
      loadingPhone: false
    }
  },
  methods: {
    flipAddOut () {
      document.getElementById('new').style.display = 'block'
      // document.getElementById('add').style.display = 'none'
      document.getElementById('new').style.zIndex = '3'
      document.getElementById('add').style.zIndex = '2'
      this.add.ID++
    },
    flipFormOut () {
      let {ID, name, email, phone} = this.add
      ID = 'card-' + ID
      this.added.push(
        {
          ID,
          name,
          email,
          phone
        }
      )
      document.getElementById('new').style.display = 'none'
      document.getElementById('add').style.display = 'none'
      document.getElementById('add').style.display = 'block'
      this.add.name = ''
      this.add.email = ''
      this.add.phone = ''
    },
    remove (index) {
      this.added.splice(index, 1)
    }
  }
}
</script>
