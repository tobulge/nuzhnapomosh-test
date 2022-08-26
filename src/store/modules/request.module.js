import request from '@/helpers/fetch'

const CATEGORIES_URL = 'https://nuzhnapomosh.frontend-developer.cf/test-api/categories.json'
const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

export default {
  namespaced: true,

  state () {
    return {
      categories: {
        groups: []
      },
      loading: false,
      sendLoading: false
    }
  },

  mutations: {
    setCategories (state, data) {
      state.categories = data
    },
    changeLoading (state, status) {
      state.loading = status
    },
    changeSendLoading (state, status) {
      state.sendLoading = status
    }
  },

  actions: {
    async getCategories ({ commit }) {
      commit('changeLoading', true)

      try {
        const data = await request.get(CATEGORIES_URL)
        commit('setCategories', data)
        commit('changeLoading', false)
      } catch (e) {
        console.log(e.message)
        commit('changeLoading', false)
      }
    },

    async sendCheckedCategories ({ state, commit }, payload) {
      commit('changeSendLoading', true)

      try {
        const data = await request.post(POST_URL, payload)
        commit('changeSendLoading', false)
        console.log('Переданный массив: ', payload)
        console.log('Ответ c json placeholder приходит вот в таком формате, в виде объекта с присвоенным id: ', data)
        commit('checked/cleanChecked', null, { root: true })
      } catch (e) {
        commit('changeSendLoading', false)
        console.log('Ошибка ', e.message)
      }
    }
  },

  getters: {
    categories (state) {
      return state.categories
    },

    loading (state) {
      return state.loading
    },

    sendLoading (state) {
      return state.sendLoading
    }
  }
}
