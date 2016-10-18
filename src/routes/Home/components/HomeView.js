import React from 'react'
import AlfredPicture from '../assets/alfred.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <img
      alt='Alfred, here to serve'
      className='home__alfred-picture'
      src={AlfredPicture} />
    <h4 className='home__title'>Hello Sir</h4>
  </div>
)

export default HomeView
