//PAGES
import Home from './pages/Home'
import CreateChannel from './pages/CreateChannel'
import JoinChannel from './pages/JoinChannel'

//GENERAL
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {name: "Home", path: "/", component: Home},
    {name: "CreateChannel", path: "/create-channel", component: CreateChannel},
    {name: "JoinChannel", path: "/join-channel", component: JoinChannel},

]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router