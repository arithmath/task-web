import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {id: 1, task: "hoge"},
      {id: 2, task: "fuga"}
    ]
  },
  getters: {
    tasks () {
      return this.state.tasks
    }
  },
  mutations: {

  },
  actions: {

  }
})
