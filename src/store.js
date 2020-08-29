import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate";
//import ChannelProvider from "./providers/ChannelProvider";


export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: "realtime",
            reducer: state => ({bingo: state.channel})
        })
    ],
    state: {
        channel: null,

    },
    mutations: {

        setChannel(state, channel) {
            state.channel = channel
        },
      
    },
    actions: {
      
    },
    getters: {
       
    }
})