<template>
  <div id="cardContainer">
    <div v-for="(contact,index) in contacts" :key="contact.id">
      <q-card :id="contact.ID" class="cards animated flip" text-color="white">
        <q-card-actions class="float-right">
          <q-fab icon="more_vert" direction="down" push glossy>
            <q-fab-action color="secondary" @click="edit(index)" push glossy icon="edit">
              <q-tooltip anchor="top right" self="bottom left">
                Edit
              </q-tooltip>
            </q-fab-action>
            <q-fab-action color="primary" @click="remove(index)" push glossy icon="delete">
              <q-tooltip anchor="top right" self="bottom left">
                Delete
              </q-tooltip>
            </q-fab-action>
          </q-fab>
        </q-card-actions>
        <q-card-media>
          <img src="statics/quasar-logo.png" alt="">
        </q-card-media>
        <q-card-title>
          {{contact.name}}
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <p>{{contact.email}}</p>
          <q-card-separator />
          <p>{{contact.phone}}</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions class="justify-around">
          <q-btn class="col call" flat><i class="fa fa-phone"></i></q-btn>
          <q-btn class="col mail" flat><i class="fa fa-envelope"></i></q-btn>
        </q-card-actions>
      </q-card>
      <div id="edit" class="animated flip" v-if="contact.edit">
        <q-card>
          <span id="span">
            <p>Select an image:</p>
            <input type="file" id="upload" extensions=".gif,.jpg,.jpeg,.png"/>
          </span>
          <q-card-separator/>
          <q-card-main>
            <q-input type="text"
            float-label="Name" clearable
            v-model="contact.name" @keyup.enter="editSave(index)"/>
            <q-input type="email"
            float-label="Email" clearable
            v-model="contact.email" @keyup.enter="editSave(index)"/>
            <q-input type="tel"
            float-label="Phone" clearable
            v-model="contact.phone" @keyup.enter="editSave(index)"/>
          </q-card-main>
          <q-card-separator/>
          <q-card-actions class="justify-around">
            <q-btn @click="editSave(index)" :loading="contact.saving" color="primary" label="Save">
              <q-spinner-pie slot="loading" />
            </q-btn>
            <q-btn @click="canceleEdit(index)" color="secondary" label="Cancel" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
    }
  },
  computed: {
    contacts: {
      get () {
        return this.$store.state.saved
      }
    }
  },
  methods: {
    remove (index) {
      this.contacts.splice(index, 1)
    },
    edit (index) {
      this.contacts[index].edit = true
    },
    editSave (index) {
      this.added[index].saving = true

      // we simulate progress here
      setTimeout(() => {
        this.added[index].edit = false
        // DON'T forget to reset loading state:
        this.added[index].saving = false
      }, 1500)
    },
    canceleEdit (index) {
      this.added[index].edit = false
    }
  }
}
</script>

<style>
#cardContainer{
  display: flex;
}
</style>
