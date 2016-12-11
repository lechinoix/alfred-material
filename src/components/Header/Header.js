import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { AppBar } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Menu from 'material-ui/svg-icons/navigation/menu'
import './Header.scss'

class Header extends Component {
  static contextTypes = {
    location: React.PropTypes.object.isRequired
  }

  static propTypes = {
    toggleMenu: React.PropTypes.func.isRequired
  }

  render () {
    let location = this.context.location
    return (
      <div className='header'>
        <AppBar
          title={<span>Alfred</span>}
          iconElementLeft={
            location.pathname === '/'
            ? <IconButton><Menu /></IconButton>
            : <IconButton onClick={hashHistory.goBack}><ArrowBack /></IconButton>
          }
          onLeftIconButtonTouchTap={() => this.props.toggleMenu()}
        />
      </div>
    )
  }
}

export default Header
