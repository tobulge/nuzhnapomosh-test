import { createStore } from 'vuex'
import request from './modules/request.module'
import checked from './modules/checked.module'

export default createStore({
  modules: {
    categories: request,
    checked
  }
})
