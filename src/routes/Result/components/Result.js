import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Avatar, Card } from 'material-ui'
import { CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

import AlfredPicture from 'static/alfred.jpg'
import './Result.scss'

export class Result extends Component {
  static propTypes = {
    id     : PropTypes.number.isRequired,
    name     : PropTypes.string.isRequired
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

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  id : state.contact.get('id'),
  name : state.contact.get('name')
})

export default connect(mapStateToProps, mapDispatchToProps)(Result)
