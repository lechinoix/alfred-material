import React from 'react'
import { AppBar } from 'material-ui'
import './Header.scss'

export const Header = () => (
  <div>
    <AppBar
      title='Alfred'
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
  </div>
)

export default Header
