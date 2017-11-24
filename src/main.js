// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//state management
// import vuex from 'vuex'
import store from './store/store'
//ajax
import axios from 'axios'
import api from './common/axios'
//base global css
import './components/style/base.scss'

Vue.prototype.$api = api;


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    axios,
    // vuex,
    store,
    template: '<App/>',
    components: {App}
})
