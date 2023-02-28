export const state = () => ({
  windowWidth:0
})

export const mutations = {
  setWindowWidth: (state, payload) =>{
    state.windowWidth = payload
  }
}

export const actions = {}

export const getters = {
  windowWidth: state => {
    return state.windowWidth
  }
}
