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
      name: '',
      email: '',
      phone: '',
      img: '',
      imgName: '',
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
    imgUpload (state, value) {
      state.add.img = value.img
      state.add.imgName = value.imgName
    },
    imgRemove (state) {
      state.add.img = ''
      state.add.imgName = ''
    },
    emptyAdd (state) {
      state.add.name = ''
      state.add.email = ''
      state.add.phone = ''
      state.add.img = ''
      state.add.imgName = ''
    },
    addId (state) {
      state.add.ID++
    },
    populateAdded (state, value) {
      state.added.push(value)
    },
    addedToStorageNSaved (state) {
      LocalStorage.set('added', state.added)
      state.saved = LocalStorage.get.item('added')
    },
    savedToAdded (state) {
      if (state.saved !== null) {
        state.added = state.saved
      }
    },
    fetchToSaved (state) {
      state.saved = LocalStorage.get.item('added')
      if (state.saved !== null) {
        state.saved.forEach((v, i, a) => {
          v.ID = 'card-' + (i + 1)
        })
        state.add.ID = state.saved.length
      }
      state.added.forEach((v, i, a) => {
        v.ID = 'card-' + (i + 1)
      })
    },
    remove (state, index) {
      state.added.splice(index, 1)
      LocalStorage.set('added', state.added)
      state.add.ID = state.saved.length
    },
    edit (state, index) {
      state.saved[index].edit = true
      LocalStorage.set('added', state.added)
    },
    imgEdit (state, value) {
      state.saved[value.card].img = value.img
      state.saved[value.card].imgName = value.imgName
    },
    unImgEdit (state, index) {
      state.saved[index].img = ''
      state.saved[index].imgName = ''
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
    },
    cancelAllEdit (state, index) {
      if (state.saved !== null) {
        state.saved.forEach((v, i, a) => {
          v.edit = false
          LocalStorage.set('added', state.added)
        })
      }
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
