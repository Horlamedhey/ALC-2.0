<template>
  <q-page padding class="row">
    <div class="col-lg-3 col-md-6 col-xl-2 col-xs-12" id="card">
      <card/>
    </div>
    <div class="col-lg-3 col-md-6 col-xl-2 col-xs-12" id="new">
      <new></new>
    </div>
    <div class="col-lg-3 col-md-6 col-xl-2 col-xs-12" id="add" @click="flipAddOut">
      <div class="addbg" style="background-image:url('statics/img_452165.png')">
        <q-tooltip>
          Click here to add a new contact
        </q-tooltip>
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus">
@import '~variables'
.row .col-md-6
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
  cursor pointer
  transform-style preserve-3d
  transition all 0.9s ease-in-out
#new
  overflow hidden
  position absolute
  background $light
  transition: all 0.9s ease-in-out
  transform: rotateX(-360deg)
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
  display none
  z-index 9999999
  transition: all 0.9s ease-in-out
  transform: rotateX(-180deg)
  transform-style preserve-3d
</style>

<script>
import Card from 'components/card'
import New from 'components/new'
export default {
  name: 'PageIndex',
  components: {
    Card,
    New
  },
  data () {
    return {
      contacts: [
        {
          name: 'Gafar Olamide Ajao',
          email: 'Horlasco34@gmail.com',
          phone: '09065954982'
        }
      ]
    }
  },
  methods: {
    flipAddOut: () => {
      document.getElementById('add').style.transform = 'rotateX(-180deg)'
      document.getElementById('new').style.transform = 'rotateX(360deg)'
      document.getElementById('new').style.zIndex = '999999999999'
      document.getElementById('new').style.height = 'unset'
    }
  },
  computed: {
  }
}
</script>
