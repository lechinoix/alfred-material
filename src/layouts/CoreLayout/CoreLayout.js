import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Header, Sidebar } from 'containers/Menus'
export const CoreLayout = ({ children }) => (
  <div className='text-center'>
    <div className='core-layout__background' />
    <Header className='core-layout__header' />
    <Sidebar />
    <div className='container core-layout__viewport'>
      <ReactCSSTransitionGroup
        transitionName='example'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {children}
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
