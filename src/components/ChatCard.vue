<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Chat
          </v-card-title>
          <v-card-text>
            <v-card class="elevation-0" outlined>
              <v-card-text>
              </v-card-text>
            </v-card>
            <v-form>
              <v-container class="ma-0 pa-0">
                <v-row>
                  <v-col cols="12" class="pt-0">
                    <v-text-field
                        v-model="message"
                        :append-outer-icon="message ? 'mdi-send' : ''"
                        filled
                        outlined
                        dense
                        clear-icon="mdi-close-circle"
                        clearable
                        label="Message"
                        type="text"
                        @click:append="toggleMarker"
                        @click:append-outer="sendMessage"
                        @click:prepend="changeIcon"
                        @click:clear="clearMessage"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChatCard",
  data: () => ({
    password: 'Password',
    show: false,
    message: '',
    marker: true,
    iconIndex: 0,
  }),
  computed: {
    icon() {
      return this.icons[this.iconIndex]
    },
  },
  methods: {
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
    },
  },
}
</script>

<style scoped>

</style>