import React, { Component, PropTypes } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import './Sidebar.scss'

class Sidebar extends Component {

  static propTypes = {
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
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Sidebar
