<template>
      <div class="col-lg-3 col-md-6 col-xl-2 col-xs-12">
        <q-card color="lime-4" text-color="fade">
          <q-card-actions class="float-right">
            <q-fab icon="more_vert" direction="down">
              <q-fab-action color="primary" @click="someMethod" icon="close"/>
              <q-fab-action color="secondary" @click="someMethod" icon="edit"/>
            </q-fab>
          </q-card-actions>
          <q-card-media>
            <img src="statics/quasar-logo.png" alt="">
          </q-card-media>
          <q-card-title>
            Gafar Oamide Ajao
          <q-card-separator />
          </q-card-title>
          <q-card-main>
            <p>Horlasco34@gmail.com</p>
            <p>08134549552</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions class="row">
            <q-btn class="col call" flat><i class="fa fa-phone"></i></q-btn>
            <q-btn class="col mail" flat><i class="fa fa-envelope"></i></q-btn>
          </q-card-actions>
        </q-card>
      </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
</style>
