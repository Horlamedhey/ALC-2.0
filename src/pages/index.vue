<template>
  <q-page padding class="row">
      <transition
        enter-active-class="animated flip"
        leave-active-class="animated flipOutY"
        appear>
        <q-alert
          v-if="$store.state.alert"
          style="left: 45pc; top: 4pc"
          type="negative"
          appear
          :actions="[{ label: 'Dismiss', handler: () => { $store.commit('negateAlert') } }]"
          class="q-mb-sm fixed">
          Please input valid details
        </q-alert>
      </transition>
    <div v-for="(contact,index) in added" :key="contact.id">
        <q-card :id="contact.ID" class="cards animated flip" text-color="white">
            <q-card-actions class="float-right">
              <q-fab icon="more_vert" direction="down" push glossy>
                <q-fab-action color="secondary" @click="edit(index)" push glossy icon="edit" />
                <q-fab-action color="primary" @click="remove(index)" push glossy icon="delete" />
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
          <div id="edit" class="animated flip" v-if="contact.edit">
              <q-card>
                <span id="span">
                  <p>Select an image:</p>
                  <input type="file" id="upload" extensions=".gif,.jpg,.jpeg,.png"/>
                </span>
                <q-card-separator/>
                <q-card-main>
                  <q-input type="text"
                  float-label="Name" clearable
                  v-model="contact.name" @keyup.enter="editSave(index)"/>
                  <q-input type="email"
                  float-label="Email" clearable
                  v-model="contact.email" @keyup.enter="editSave(index)"/>
                  <q-input type="tel"
                  float-label="Phone" clearable
                  v-model="contact.phone" @keyup.enter="editSave(index)"/>
                </q-card-main>
                <q-card-separator/>
                <q-card-actions>
                  <q-btn id="editSave" @click="editSave(index)" :loading="contact.saving" color="primary" label="Save">
                    <q-spinner-pie slot="loading" />
                  </q-btn>
                </q-card-actions>
              </q-card>
            </div>
        </div>
    <div id="start">
      <div id="new" class="animated flip">
        <q-card>
          <q-btn
            round glossy
            color="primary"
            @click="closeForm"
            class="fixed"
            icon="close"
            style="right: 15px; top: 7px" />
          <span id="span">
            <p>Select an image:</p>
            <input @change="putImage" type="file" id="upload" extensions=".gif,.jpg,.jpeg,.png"/>
          </span>
        <q-card-separator/>
        <q-card-main>
          <q-field :error="error" error-label="Sorry, that name already exist.">
            <q-input type="text"
            float-label="Name" clearable autocomplete
            :loading="loadingName" @focus="loadingName = true"
            @blur="loadingName = false"
             @keyup.enter="flipFormOut" v-model="add.name"/>
          </q-field>
          <q-field :error="error" error-label="Sorry, that email already exist.">
            <q-input type="email"
            float-label="Email" clearable autocomplete
            :loading="loadingEmail" @focus="loadingEmail = true"
            @blur="loadingEmail = false"
             @keyup.enter="flipFormOut" v-model="add.email"/>
          </q-field>
          <q-field :error="error" error-label="Sorry, that phone already exist.">
            <q-input type="tel"
            float-label="Phone" clearable autocomplete
            :loading="loadingPhone" @focus="loadingPhone = true"
            @blur="loadingPhone = false"
             @keyup.enter="flipFormOut" v-model="add.phone"/>
          </q-field>
        </q-card-main>
        <q-card-separator/>
        <q-card-actions>
          <q-btn @click="flipFormOut" :loading="submitting" :percentage="percentage" color="primary" label="Flip">
            <q-spinner-pie slot="loading" />
          </q-btn>
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
  width 15pc
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
  position absolute
  display none
  z-index 1
  background $info
  width 100%
  height 22.4pc
  padding-top 4.5pc
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
#edit
  margin-top 0.3pc
  background #000
  width 14.96pc
#edit input
  color teal
#new, #edit
  overflow hidden
  white-space nowrap
cards_colors = ( red blue green yellow pink purple #1a1aff #993366 #66ffff #99cc00 #ff9900 #669900 teal #333300 #0099cc #ff00ff )
random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)
for num in (1..1000)
  #card-{num}
    background cards_colors[random(0, 15)]
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
      submitting: false,
      percentage: 0,
      add: {
        ID: 0,
        name: '',
        email: '',
        phone: '',
        img: '',
        saving: false,
        edit: false
      },
      added: [],
      error: false,
      url: 'http://localhost:8000/contacts',
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
      if (this.add.name === '' && this.add.email === '' && this.add.phone === '') {
        this.$store.commit('alert')
        if (this.$store.state.alert === true) {
          return this.flipAddOut()
        }
      } else {
        this.$store.commit('negateAlert')
      }
      this.submitting = true
      this.percentage = 0

      // we simulate progress here
      this.interval = setInterval(() => {
        // adding a random amount of percentage
        this.percentage += Math.floor(Math.random() * 10 + 17)

        // and when we are done...
        if (this.percentage >= 100) {
          clearInterval(this.interval)
          let {ID, name, email, phone, img, edit, saving} = this.add
          ID = 'card-' + ID
          this.added.push(
            {
              ID,
              name,
              email,
              phone,
              img,
              edit,
              saving
            }
          )
          document.getElementById('new').style.display = 'none'
          document.getElementById('add').style.display = 'none'
          document.getElementById('add').style.display = 'block'
          this.add.name = ''
          this.add.email = ''
          this.add.phone = ''
          this.add.img = ''
          this.submitting = false
        }
      }, 700)
    },
    closeForm () {
      clearInterval(this.interval)
      this.$store.commit('negateAlert')
      this.submitting = false
      this.percentage = 0
      document.getElementById('new').style.display = 'none'
      document.getElementById('add').style.display = 'none'
      document.getElementById('add').style.display = 'block'
      this.add.name = ''
      this.add.email = ''
      this.add.phone = ''
      this.add.img = ''
    },
    putImage () {
      let upload = document.querySelector('#upload')
      var file
      if (upload.files.length > 0) {
        file = upload.files[0]
      }
      this.add.img = file.name
    },
    remove (index) {
      this.added.splice(index, 1)
    },
    edit (index) {
      this.added[index].edit = true
    },
    editSave (index) {
      this.added[index].saving = true

      // we simulate progress here
      setTimeout(() => {
        this.added[index].edit = false
        // DON'T forget to reset loading state:
        this.added[index].saving = false
      }, 1500)
    }
  },
  mounted () {
    this.$store.commit('negateAlert')
  }
}
</script>
