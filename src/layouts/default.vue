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
          <q-btn>test</q-btn>
        </q-list>
      </q-layout-drawer>
    <q-page-container>
      <router-view />
      <q-page-sticky id="top" position="bottom-right" :offset="[18, 18]">
        <q-btn
          v-back-to-top.animate="{offset: 500, duration: 400}"
          round class="animate-pop"
          size="lg"
          color="primary"
          icon="keyboard_arrow_up"/>
      </q-page-sticky>
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
#top{
  z-index: 99999999;
}
</style>
