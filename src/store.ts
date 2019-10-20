import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let client = axios.create({
  baseURL: 'http://localhost:9000'
})

export default new Vuex.Store({
  state: {
    tasks: {

    }
  },
  getters: {
    tasks2 (state) {
      console.log("store getters.tasks2")
      return state.tasks
    }
  },
  mutations: {
    fetchTaskList(state, payload) {
      console.log("[store] mutations fetchTaskList")
      let tasks = {}
      payload.forEach((value) => {
        tasks[value.id] = value
      })
      state.tasks = tasks
    },
    addTask(state, payload) {
      console.log("[store] mutations addTask. payload = " + JSON.stringify(payload))

      // Vue.jsはオブジェクトのプロパティの変化を検知できないので、
      // 普通に連想配列に値をセットしても反映されない。
      // 代わりにVueのdeleteを使う
      Vue.set(state.tasks, payload.id, payload)
    },
    updateTask(state, payload) {
      console.log("[store] mutations updateTask. payload = " + JSON.stringify(payload))
      
      // Vue.jsはオブジェクトのプロパティの変化を検知できないので、
      // 普通に連想配列に値をセットしても反映されない。
      // 代わりにVueのdeleteを使う
      Vue.set(state.tasks, payload.id, payload)
    },
    deleteTask(state, payload) {
      console.log("[store] mutations deleteTask. payload = " + JSON.stringify(payload))

      // Vue.jsはオブジェクトのプロパティの変化を検知できないので、
      // 普通にdeleteすると反映されない。
      // 代わりにVueのdeleteを使う
      Vue.delete(state.tasks, payload.id)
    }
  },
  actions: {
    fetchTaskList(context) {
      client.get('/tasks')
        .then(res => context.commit('fetchTaskList', res.data))
        .catch(err => console.log(err))
    },
    addTask(context, payload) {
      console.log("[store] action addTask. payload = " + JSON.stringify(payload))
      client.post('/tasks', payload)
        .then(res => context.commit('addTask', res.data))
        .catch(err => console.log(err))
    },
    deleteTask(context, payload) {
      client.delete('/tasks/' + payload.id)
        .then(res => context.commit('deleteTask', res.data))
        .catch(err => console.log(err))
    },
    updateTask(context, payload) {
      client.put('/tasks/' + payload.id, payload)
        .then(res => context.commit('updateTask', res.data))
        .catch(err => console.log(err))
    }
  }
})
