import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Avatar, Card } from 'material-ui'
import { CardTitle } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import AlfredPicture from 'static/alfred.jpg'
import './Visitor.scss'

export class Visitor extends Component {
  static propTypes = {
    name     : PropTypes.string.isRequired,
    setName : PropTypes.func.isRequired
  }

  render () {
    return (
      <Card className='visitor__card visitor'>
        <div className='visitor__alfred-wrapper'>
          <Avatar
            className='visitor__alfred-picture'
            size={150}
            src={AlfredPicture}
          />
          <CardTitle title='Who am I to announce ?' />
        </div>
        <div className='visitor__name'>
          <TextField
            floatingLabelText='Your name'
            onChange={(event) => this.props.setName(event.target.value)}
          />
        </div>
        <Link to='/contact'>
          <RaisedButton className='visitor__action-button' label='Next' fullWidth primary />
        </Link>
      </Card>
    )
  }
}

export default Visitor
