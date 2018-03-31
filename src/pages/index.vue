<template>
  <q-page padding>
  <div class="row">
    <card id="card"/>
    <div class="col-lg-3 col-md-6 col-xl-2 col-xs-12 form" id="form">
    <q-card-media v-ripple>
      <img src="statics/download (1).png" alt="">
    </q-card-media>
    <q-card-separator/>
    <q-card-main>
      <q-input type="text"
      float-label="Name" clearable autocomplete
      :loading="loadingName" @focus="loadingName = true"
      @blur="loadingName = false"
      value=""/>
      <q-input type="email"
      float-label="Email" clearable autocomplete
      :loading="loadingEmail" @focus="loadingEmail = true"
      @blur="loadingEmail = false"
      value=""/>
      <q-input type="tel"
      float-label="Phone" clearable autocomplete
      :loading="loadingPhone" @focus="loadingPhone = true"
      @blur="loadingPhone = false"
      value=""/>
    </q-card-main>
    <q-card-separator/>
    <q-card-actions>
      <q-btn color="pink-10" @click="flipFormOut">Flip</q-btn>
    </q-card-actions>
    </div>
    <div
    class="col-lg-3 col-md-6 col-xl-2 col-xs-12"
    id="add"
    @click="flipAddOut">
          <div class="add" style="background-image:url('statics/img_452165.png')"/>
    </div>
  </div>
  </q-page>
</template>

<style lang="stylus">
@import '~variables'
body
  background: $tertiary
.add
  background center no-repeat
  background-size 60%
  width 100%
  height 100%
#add
  height 22.4pc
  background white
  position absolute
  z-index 9999999
  cursor pointer
  transform-style preserve-3d
  backface-visibility hidden
  transition all 0.9s ease-in-out
#form
  position absolute
  z-index 9999999
  height 22.4pc
  overflow hidden
  transition 25s
  transition: all 0.9s ease-in-out
  transform: rotateX(-180deg)
  transform-style preserve-3d
  background white
.q-card-media
  cursor pointer
#form .q-btn
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
  // display none
  position absolute
  visibility hidden
  z-index 9999999
  transition: all 0.9s ease-in-out
  transform: rotateX(-180deg)
  transform-style preserve-3d
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
      loadingName: false,
      loadingEmail: false,
      loadingPhone: false
    }
  },
  methods: {
    flipAddOut: () => {
      document.getElementById('add').style.transform = 'rotateX(-180deg)'
      document.getElementById('form').style.transform = 'rotateX(0deg)'
      document.getElementById('form').style.height = 'unset'
    },
    flipFormOut: () => {
      document.getElementById('card').style.visibility = 'visible'
      document.getElementById('form').style.transform = 'rotateX(-180deg)'
      document.getElementById('card').style.transform = 'rotateX(0deg)'
      document.getElementById('form').style.zIndex = '999999'
      // document.getElementById('add').style.visibility = 'hidden'
      // document.getElementById('form').style.width = 'unset'
      document.getElementById('form').style.height = '22.4pc'
    }
  },
  computed: {
  }
}
</script>
