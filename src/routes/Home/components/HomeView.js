import React from 'react'
import { Avatar, Card } from 'material-ui'
import { CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import './HomeView.scss'
import AlfredPicture from '../assets/alfred.jpg'

export const HomeView = () => (
  <Card className='home__card'>
    <div className='home__alfred-wrapper'>
      <Avatar
        className='home__alfred-picture'
        size={150}
        src={AlfredPicture}
      />
      <CardTitle title='Hello Sir' subtitle='How can I help you ?' />
    </div>
    <RaisedButton className='home__action-button' label='Visiting Theodo ?' fullWidth primary />
    <RaisedButton className='home__action-button' label='Waiting for a guest ?' fullWidth primary />
    <RaisedButton className='home__action-button' label='Wanted to talk with me ?' fullWidth primary />
  </Card>
)

export default HomeView
