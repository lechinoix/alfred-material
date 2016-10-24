import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { blueGrey500, blueGrey700, yellow500 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: yellow500
  }
})

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <div style={{
            height: '100%',
            background: 'url(batman.jpg)',
            backgroundSize: '100% 100%'
          }}>
            <Router history={browserHistory} children={routes} />
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default AppContainer
