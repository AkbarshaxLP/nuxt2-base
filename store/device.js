// getting information about the user's device
// mutated from plugins/device.client.js

export const state = () => ({
  DOMContentLoaded: false,
  isTouchpad: null,
  width: null,
  height: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
})

export const mutations = {
  set(state, { key, value }) {
    state[key] = value
  }
}

export const getters = {
  DOMContentLoaded(state) {
    return state.DOMContentLoaded
  },
  isTouchpad(state) {
    return state.isTouchpad
  },
  width(state) {
    return state.width
  },
  height(state) {
    return state.height
  },
  sm(state) {
    return state.sm
  },
  md(state) {
    return state.md
  },
  lg(state) {
    return state.lg
  },
  xl(state) {
    return state.xl
  },
  xxl(state) {
    return state.xxl
  },
  xsOnly(state) {
    return !state.sm
  },
  smOnly(state) {
    return state.sm && !state.md
  },
  mdOnly(state) {
    return state.md && !state.lg
  },
  lgOnly(state) {
    return state.lg && !state.xl
  },
  xlOnly(state) {
    return state.xl && !state.xxl
  }
}


