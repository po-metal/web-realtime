<template>
    <v-card :to="{name:'CreateChannel'}">
        <v-row class="ma-0" >
            <v-col cols="3" >
                <v-icon size="72" color="green darken-2">category</v-icon>
            </v-col>
            <v-col cols="9">
                <v-card-title class="subtitle-1 pl-0  pt-0" >Create Channel</v-card-title>
                <v-card-subtitle class="pl-0 pb-0">Crear un canal de chat</v-card-subtitle>
            </v-col>
        </v-row>
        <v-btn color="indigo" class="mb-n-10" bottom right absolute text ><v-icon>arrow_forward</v-icon></v-btn>
    </v-card>

</template>
<script>
    export default {
        name: 'CreateChannelCard',
        data() {
            return {}
        },
        created() {
        }
    }
</script>