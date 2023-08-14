// getting information about the user's device
export default function ({ store }) {
  // touch screen check
  store.commit('device/set', { key: 'isTouchpad', value: 'ontouchstart' in window })

  // getting true vh and vw
  window.addEventListener('resize', () => {
    store.commit('device/set', { key: 'width', value: document.documentElement.clientWidth })
    store.commit('device/set', { key: 'height', value: document.documentElement.clientHeight })
  })

  // media queries
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
  const sm = window.matchMedia("(min-width: 576px)")
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
  sm.addEventListener('change', onchange.bind(this, 'sm'))
  onchange('sm', sm)

  const md = window.matchMedia("(min-width: 768px)")
  md.addEventListener('change', onchange.bind(this, 'md'))
  onchange('md', md)

  const lg = window.matchMedia("(min-width: 992px)")
  lg.addEventListener('change', onchange.bind(this, 'lg'))
  onchange('lg', lg)

  const xl = window.matchMedia("(min-width: 1200px)")
  xl.addEventListener('change', onchange.bind(this, 'xl'))
  onchange('xl', xl)

  const xxl = window.matchMedia("(min-width: 1400px)")
  xxl.addEventListener('change', onchange.bind(this, 'xxl'))
  onchange('xxl', xxl)

  store.commit('device/set', { key: 'DOMContentLoaded', value: true })

  function onchange(key, { matches }) {
    store.commit('device/set', { key, value: matches })
  }
}
