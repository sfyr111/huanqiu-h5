export default function (config = {baseActive: true}) {
  return function (target) {
    const lifeCycle = [
      'render',
      'componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount',
      'shouldComponentUpdate'
    ]
    lifeCycle.forEach((method) => {
      let blankFn = method === 'shouldComponentUpdate' ? safeShouldComponentUpdate : function () {
        return null
      }
      let unsafe = target.prototype[method] || function () {
        return null
      }
      target.prototype[method] = function () {
        try {
          return unsafe.call(this, arguments)
        } catch (e) {
          const report = {
            displayName: target.name,
            method,
            message: e.stack,
            state: this.state,
            props: this.props
          }
          config.baseActive && baseErrHandle(report)
          config.errorHandler && config.errorHandler.call(this, report)
          return blankFn.call(this, arguments)
        }
      }
    })
  }
}

function safeShouldComponentUpdate() {
  return true
}

function baseErrHandle(report) {
  console.error(report)
}