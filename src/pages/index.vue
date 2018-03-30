<template>
  <q-page padding>
  <div class="row">
    <div
    class="col-lg-3 col-md-6 col-xl-2 col-xs-12"
    id="add"
    @click="flipOut">
      <div class="add" style="background-image:url('statics/img_452165.png')"/>
    </div>
    <!-- <card id="all"/> -->
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
      loading: false
    }
  },
  methods: {
    load: () => {
      this.loading = true
    },
    flipOut: () => {
      document.getElementById('add').style.transform = 'rotateX(-180deg)'
      document.getElementById('all').style.transform = 'rotateX(0deg)'
    }
  },
  computed: {
  }
}
</script>
