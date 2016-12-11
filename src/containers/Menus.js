import { connect } from 'react-redux'
import * as actionCreators from 'store/menu'

import HeaderComponent from '../components/Header'
import SidebarComponent from '../components/Sidebar'

const mapStateToProps = (state) => ({
  opened : state.menu.opened
})

export const Header = connect(mapStateToProps, actionCreators)(HeaderComponent)
export const Sidebar = connect(mapStateToProps, actionCreators)(SidebarComponent)
