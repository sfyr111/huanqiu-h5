/* eslint-disable */
export const getParameterByName = function (name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[[\]]/g, '\\$&')
  // name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const debounce = function (fn, delay = 100) {
  let timer

  return function () {
    let context = this
    let args = arguments

    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

export const throttle = function (fn, threshhold = 250) {
  let last
  let timer

  return function () {
    let context = this
    let args = arguments

    let now = Date.now()

    if (last && now < last + threshhold) {
      clearTimeout(timer)

      timer = setTimeout(() => {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

export const px2rem = function (px) {
  const p = px.replace('px', '')
  return `${+p / 37.5}rem`
}

export const setWechatTitle = function(title) {

  document.title = title

  var mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    var iframe = document.createElement('iframe')
    iframe.style.visibility = 'hidden'
    //替换成网站图标或者任意存在的较小的图标即可
    // iframe.setAttribute('src','../../img/logo.png')
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load',iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }

    iframe.addEventListener('load', iframeCallback)
    document.body.appenfChild(iframe)
  }
}

export function isWeixinBrowser(){
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}

export function openUrl(url) {
  if (!isWeixinBrowser()) url = url.replace('http', ' thredirect')
  window.open(url)
}