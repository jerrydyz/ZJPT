import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// import * as getters from './getters'
import getters from './getters'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)



const store = new Vuex.Store({
state,
mutations,
getters,
actions
});

export default store