<template>
  <v-card outlined>
    <v-card-title>
      <div>Create Channel</div>
    </v-card-title>
    <v-card-subtitle>
      Crear Channel
    </v-card-subtitle>

    <v-card-text>
      <v-form ref="channelForm" autocomplete="off" @submit.prevent="save">

        <v-row>
          <v-col cols="12" sm="6" md="3" lg="3">
            <v-text-field
                id="title"
                prepend-icon="title"
                name="title"
                label="Channel Name"
                placeholder="Channel Name"
                type="text"
                v-model="form.name"
                class="pa-3"
                hint="Define el nombre de tu canal"
                :rules="[rules.required]"
            />
          </v-col>


        </v-row>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="save" text color="blue darken-4">Create</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import ChannelProvider from "../providers/ChannelProvider";

export default {
  name: "CreateChannelForm",
  data() {
    return {
      form: {
        name: ''
      },
      rules: {
        required: value => !!value || 'Requerido'
      },
    }
  },
  methods: {
    save() {
      if (this.$refs.channelForm.validate()) {
        ChannelProvider.createChannel(this.form)
            .then(
                response => {
                  this.$store.commit('setChannel', response.data.createChannel)
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