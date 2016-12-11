import React, { Component, PropTypes } from 'react'
import Drawer from 'material-ui/Drawer'
import { Link } from 'react-router'
import MenuItem from 'material-ui/MenuItem'
import './Sidebar.scss'

class Sidebar extends Component {

  static propTypes = {
    closeMenu  :   PropTypes.func.isRequired,
    opened      :  PropTypes.bool.isRequired,
    toggleMenu  :   PropTypes.func.isRequired
  }

  render () {
    let _props = this.props
    return (
      <div className='sidebar'>
        <Drawer
          docked={false}
          open={_props.opened}
          onRequestChange={(open) => _props.toggleMenu({ open })}
        >
          <Link to='/'><MenuItem onTouchTap={this.props.closeMenu}>Home</MenuItem></Link>
          <MenuItem>About</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Sidebar
