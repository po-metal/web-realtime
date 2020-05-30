<template>
  <v-container>
      
      <v-row>
        <v-col cols="12" sm="4" >
          <create-channel-card />
        </v-col>

        <v-col cols="12" sm="4" >
          <join-channel-card />
        </v-col>

      </v-row>


  </v-container>
</template>

<script>
import CreateChannelCard from '../components/CreateChannelCard'
import JoinChannelCard from '../components/JoinChannelCard'

export default {
    name: "Home",
    components: {
      CreateChannelCard, JoinChannelCard
    }
}
</script>

<style>

</style>