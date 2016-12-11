import React, { Component } from 'react'
import { AppBar } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import './Header.scss'

class Header extends Component {
  static contextTypes = {
    location: React.PropTypes.object.isRequired
  }

  static propTypes = {
    toggleMenu: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className='header'>
        <AppBar
          title={<span>Alfred</span>}
          iconElementLeft={
            <IconButton><Menu /></IconButton>
          }
          onLeftIconButtonTouchTap={() => this.props.toggleMenu()}
        />
      </div>
    )
  }
}

export default Header
