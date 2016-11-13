export default (store) => ({
  path : 'result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Result = require('./components/Result').default
      cb(null, Result)
    }, 'result')
  }
})
