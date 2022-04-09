import Vue from 'vue'
import Vuex from 'vuex'
import workerModule from "./modules/worker"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    worker: workerModule,
  }
})
