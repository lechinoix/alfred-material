import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from 'components/Header'
export const CoreLayout = ({ children }) => (
  <div className='text-center'>
    <Header className='core-layout__header' />
    <ReactCSSTransitionGroup
      transitionName='example'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <div className='container core-layout__viewport'>
        {children}
      </div>
    </ReactCSSTransitionGroup>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
