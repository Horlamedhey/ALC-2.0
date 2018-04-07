<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="blue"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          Flip 'n' Add
          <div slot="subtitle">Connecting you with millions of user</div>
        </q-toolbar-title><q-btn
        flat round dense
        @click="showRight = !showRight"
        icon="menu"
      />
      </q-toolbar>
    </q-layout-header>
      <q-layout-drawer side="right" v-model="showRight">
        <q-list>
          <q-item>me</q-item>
        </q-list>
      </q-layout-drawer>
    <q-page-container>
      <router-view />
      <q-ajax-bar/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      showRight: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
body{
  padding-left: 4pc;
}
</style>
