
import tdkConfig from 'rootconfig/tdk.js'
// tdk keywors and description
function getTDK (vm) {
  const { tdk } = vm.$options
  if (tdk) {
    return typeof tdk === 'function'
      ? tdk.call(vm)
      : tdk
  }
}

const serverTDKMixin = {
  created () {
    let tdk = getTDK(this)
    if (tdk) {
      tdk = Object.assign(tdkConfig, tdk)
      this.$ssrContext.tdk = tdk
    }
  }
}

const clientTDKMixin = {
  mounted () {
    let tdk = getTDK(this)
    if (tdk) {
      tdk = Object.assign(tdkConfig, tdk)
      document.title = `${tdk.title}`
      document.querySelector(`meta[name=keywords]`).content = tdk.keywords
      document.querySelector(`meta[name=description]`).content = tdk.description
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTDKMixin
  : clientTDKMixin
