export default {
  namespaced: true,

  state: {
    tags: [],
    ids: []
  },

  getters: {
    tags (state) {
      return state.tags
    },

    ids (state) {
      return state.ids
    }
  },

  mutations: {
    setChecked (state, payload) {
      state.tags.push(payload)
    },

    removeChecked (state, index) {
      state.tags.splice(index, 1)
    },

    cleanChecked (state) {
      state.tags = []
    },

    setIds (state) {
      const ids = []

      state.tags.forEach(arr => {
        arr.forEach(obj => {
          if (!ids.includes(obj.id)) {
            ids.unshift(obj.id)
          }
        })
      })

      state.ids = ids
    }
  }
}
