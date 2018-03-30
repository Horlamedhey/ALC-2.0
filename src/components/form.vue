<template>
  <q-card>
    <q-card-media v-ripple>
      <img src="statics/download (1).png" alt="">
    </q-card-media>
    <q-card-separator/>
    <q-card-main>
      <q-input type="text" float-label="Name"/>
      <q-input type="email" float-label="Email"/>
      <q-input type="tel" float-label="Phone"/>
    </q-card-main>
    <q-card-separator/>
    <q-card-actions>
      <q-btn>Submit</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.form
  transition: all 0.9s ease-in-out
  transform: rotateX(-180deg)
  transform-style preserve-3d
  background white
.q-card-media
  cursor pointer
</style>
