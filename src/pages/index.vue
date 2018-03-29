<template>
  <q-page padding>
  <div class="row">
    <div class="col-lg-3 col-md-6 col-xl-2 col-xs-12">
      <q-card color="white">
        <q-card-media>
          <img src="statics/img_452165.png" alt="">
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
.q-input
  max-width: 100%
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
    }
  },
  computed: {
  }
}
</script>
