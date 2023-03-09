export const state = () => ({
  windowWidth: 0,
  windowHeight: 0,
})

export const mutations = {
  setWindowWidth: (state, payload) => {
    state.windowWidth = payload
  },
  setWindowHeight: (state, payload) => {
    state.windowHeight = payload
  },
}

export const actions = {}

export const getters = {
  windowWidth: (state) => {
    return state.windowWidth
  },
  windowHeight: (state) => {
    return state.windowHeight
  },
}
