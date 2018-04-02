<template>
        <q-card color="lime-4" text-color="fade" class="cards">
          <q-card-actions class="float-right">
            <q-fab icon="more_vert" direction="down">
              <q-fab-action color="primary" @click="someMethod" icon="delete"/>
              <q-fab-action color="secondary" @click="someMethod" icon="edit"/>
            </q-fab>
          </q-card-actions>
          <q-card-media>
            <img src="statics/quasar-logo.png" alt="">
          </q-card-media>
          <q-card-title>
            {{$store.state.contacts[0].name}}
          <q-card-separator />
          </q-card-title>
          <q-card-main>
            <p>{{$store.state.contacts[0].email}}</p>
            <p>{{$store.state.contacts[0].phone}}</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions class="row">
            <q-btn class="col call" flat><i class="fa fa-phone"></i></q-btn>
            <q-btn class="col mail" flat><i class="fa fa-envelope"></i></q-btn>
          </q-card-actions>
        </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
</style>
