/**
 * Created by jingqw on 17/11/24.
 * 统一状态管理store
 */
import Vue from 'vue'
import Vuex from 'vuex'

// import actions from './actions'
// import mutations from './mutations'
// import * as types from './type'

Vue.use(Vuex);
export default new Vuex.Store({
    //公用状态
    state: {
        user: {},
        token: null,
        title: '冬瓜FM',
        showLoading: false
    },
    mutations: {
        loading: state => {
            state.showLoading = true;
        },
        hideLoading: state => {
            state.showLoading = false;
        },
    },
    getters: {
        // changeState: state => {
        //     //相当于vue实例中的methods,用于处理公用data
        //     //自vuex 面向组件的数据处理
        // }
    },
    actions: {
        // increment ({ commit }, payload) {
        //     commit('突变方法名')
        //     //payload应该是一个对象，可通过模板方法调用传入对象的方式将数据从组件传入vuex
        // },
    },

});
