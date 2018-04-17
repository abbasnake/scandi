import Vue from 'vue'
import Vuex from 'vuex'
import jsData from './data' // this is saved to localData if not already done

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMonth: 'jan',
    data: {}
  },
  getters: {
  },
  mutations: {
    loadData (state, payload) {
      state.data = payload
    }
  },
  actions: {
    loadData (context) {
      /*
      Check if data is in local storage. If not load it from
      the local data.js file imported at the top from this folder
      */
      if (localStorage.getItem('scandiData')) { // check if data is in localStorage
        const localStorageData = localStorage.getItem('scandiData') // load from localStorage
        const json = JSON.parse(localStorageData) // parse to JSON
        context.commit('loadData', json) // set it to state.data property
      } else {
        const localData = jsData // load from local js file
        const stringifiedData = JSON.stringify(localData) // stringify
        localStorage.setItem('scandiData', stringifiedData) // save to localStorage
        context.commit('loadData', localData) // set it to state.data property
      }
    }
  }
})
