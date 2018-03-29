<template>
  <q-page padding>
  <div class="row">
    <div class="col-lg-3 col-md-6 col-xl-2 col-xs-12">
      <q-card color="white" id="add">
        <q-card-media>
          <img src="statics/img_452165.png" alt="" @click="flipOut">
        </q-card-media>
      </q-card>
    </div>
    <card/>
  </div>
  </q-page>
</template>

<style lang="stylus">
@import '~variables'
body
  background: $tertiary
#add
  z-index 999999
  cursor pointer
  transform-style preserve-3d
  backface-visibility hidden
  transition all 0.4s ease-in-out
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
      document.getElementById('add').style.transform = 'rotateX(90deg)'
    }
  },
  computed: {
  }
}
</script>
