import Vue from 'vue'
import Vuex from 'vuex'
import { LocalStorage } from 'quasar'
import example from './module-example'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example
  },
  state: {
    add: {
      ID: 0,
      name: 'eafed',
      email: '',
      phone: '',
      img: '',
      saving: false,
      edit: false
    },
    added: [],
    alert: false,
    saved: null
  },
  mutations: {
    updateName (state, value) {
      state.add.name = value
    },
    updateEmail (state, value) {
      state.add.email = value
    },
    updatePhone (state, value) {
      state.add.phone = value
    },
    emptyAdd (state) {
      state.add.name = ''
      state.add.email = ''
      state.add.phone = ''
    },
    addId (state) {
      state.add.ID++
    },
    populateAdded (state, value) {
      state.added.push(value)
    },
    addedToStorage (state) {
      LocalStorage.set('added', state.added)
    },
    fetchToSaved (state) {
      state.saved = LocalStorage.get.item('added')
    },
    savedToAdded (state) {
      if (state.saved !== null) {
        state.added = state.saved
      }
      state.add.ID = state.saved.length
    },
    remove (state, index) {
      state.saved.splice(index, 1)
      LocalStorage.set('added', state.added)
    },
    edit (state, index) {
      state.saved[index].edit = true
      LocalStorage.set('added', state.added)
    },
    editSave (state, index) {
      state.saved[index].saving = true
    },
    endSave (state, index) {
      state.saved[index].saving = false
      LocalStorage.set('added', state.added)
    },
    cancelEdit (state, index) {
      state.saved[index].edit = false
      LocalStorage.set('added', state.added)
    },
    save (state) {
      LocalStorage.set('added', state.added)
    },
    alert (state) {
      state.alert = true
    },
    negateAlert (state) {
      state.alert = false
    }
  }
})

export default store
