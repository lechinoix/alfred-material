import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Avatar, Card } from 'material-ui'
import { CardTitle } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import AlfredPicture from 'static/alfred.jpg'
import './Result.scss'

export class Result extends Component {
  static propTypes = {
    userId     : PropTypes.number.isRequired
  }

  render () {
    return (
      <Card className='result__card result'>
        <div className='result__alfred-wrapper'>
          <Avatar
            className='result__alfred-picture'
            size={150}
            src={AlfredPicture}
          />
          <CardTitle title={`${this.props.name} is on his way sir`} />
        </div>
        <Link to='/'>
          <RaisedButton className='result__action-button' label='Back to home' fullWidth primary />
        </Link>
      </Card>
    )
  }
}

export default Result
