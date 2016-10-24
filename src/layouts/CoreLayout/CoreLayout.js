import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'
import Header from 'components/Header'
export const CoreLayout = ({ children }) => (
  <div className='text-center'>
    <Header className='core-layout__header' />
    <div className='container core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
