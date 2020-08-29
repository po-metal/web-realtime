<template>
  <v-card outlined>
    <v-card-title>
      <div>Join Channel</div>
    </v-card-title>
    <v-card-subtitle>
      Join Channel
    </v-card-subtitle>

    <v-card-text>
      <v-form ref="joinForm" autocomplete="off" @submit.prevent="save">

        <v-row>
          <v-col cols="12" sm="6" md="3" lg="3">
            <v-text-field
                id="title"
                prepend-icon="title"
                name="title"
                label="Name"
                placeholder="Name"
                type="text"
                v-model="form.userName"
                class="pa-3"
                hint="Ingresa tu Nombre"
                :rules="[rules.required]"
            />
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3">
            <v-text-field
                id="title"
                prepend-icon="title"
                name="title"
                label="Code"
                placeholder="Code"
                type="text"
                v-model="form.code"
                class="pa-3"
                hint="Ingresa el codigo del canal"
                :rules="[rules.required]"
            />
          </v-col>


        </v-row>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="save" text color="blue darken-4">Join</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import ChannelProvider from "../providers/ChannelProvider";

export default {
  name: "JoinChannelForm",
  data() {
    return {
      form: {
        userName: '',
        code: ''
      },
      rules: {
        required: value => !!value || 'Requerido'
      },
    }
  },
  methods: {
    save() {
      if (this.$refs.joinForm.validate()) {
        ChannelProvider.joinChannel(this.form.userName, this.form.code)
            .then(
                response => {
                  this.$store.commit('setChannel', response.data.joinChannel)
                  this.$router.push({name: 'Chat'});
                }
            )
            .catch(
                err => {
                  console.error(err)
                }
            )
      }
    }
  }
}
</script>

<style scoped>
</style>