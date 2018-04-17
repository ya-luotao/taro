export const ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN'
}

export function getEnv () {
  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    return ENV_TYPE.WEAPP
  }
  if (typeof window !== 'undefined') {
    return ENV_TYPE.WEB
  }
  if (typeof global !== 'undefined' && global.ErrorUtils) {
    return ENV_TYPE.RN
  }
  return 'Unknown environment'
}

export function isEmptyObject (obj) {
  if (!obj) {
    return false
  }
  for (const n in obj) {
    if (obj.hasOwnProperty(n) && obj[n]) {
      return false
    }
  }
  return true
}

/**
 * JSON 克隆
 * @param {Object | Json} jsonObj json对象
 * @return {Object | Json} 新的json对象
 */
export function objClone (jsonObj) {
  var buf
  if (jsonObj instanceof Array) {
    buf = []
    var i = jsonObj.length
    while (i--) {
      buf[i] = objClone(jsonObj[i])
    }
    return buf
  } else if (jsonObj instanceof Object) {
    buf = {}
    for (var k in jsonObj) {
      buf[k] = objClone(jsonObj[k])
    }
    return buf
  } else {
    return jsonObj
  }
}

export function getPrototype (obj) {
  /* eslint-disable */
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(obj)
  } else if (obj.__proto__) {
    return obj.__proto__
  }
  /* eslint-enable */
  return obj.constructor.prototype
}

export function getPrototypeChain (obj) {
  const protoChain = []
  while ((obj = getPrototype(obj))) {
    protoChain.push(obj)
  }
  return protoChain
}
