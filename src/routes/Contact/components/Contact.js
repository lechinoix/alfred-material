import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Avatar, Card } from 'material-ui'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import { CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import _ from 'lodash'

import AlfredPicture from 'static/alfred.jpg'
import './Contact.scss'

// let SelectableList = makeSelectable(List)

export class Contact extends Component {
  static propTypes = {
    id     : PropTypes.string.isRequired,
    setContactId : PropTypes.func.isRequired
  }

  render () {
    let theodoers = {
      '918495918275783': {
        'image': 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p100x100/13124648_123834781358498_1937813151338594523_n.jpg?oh=4709e666ddd2fc464c1b1b52bfd41023&oe=58A77A7A',
        'first_name': 'Jérémy',
        'last_name': 'Gotteland'
      },
      '891296217663528': {
        'image': 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p100x100/12963901_161920170869426_4162814262304976425_n.jpg?oh=1881fb837eec0650fb7528b84cb35724&oe=5890A47A',
        'first_name': 'Louis',
        'last_name': 'Zawadzki'
      },
      '1125437890831038': {
        'image': 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p100x100/12936683_148459185549412_1335477348834603386_n.jpg?oh=e41d079a203887f87408f8fc749efdd1&oe=58A1DE95',
        'first_name': 'Eduardo',
        'last_name': 'San Martin Morote'
      }
    }
    return (
      <Card className='contact__card contact'>
        <div className='contact__alfred-wrapper'>
          <Avatar
            className='contact__alfred-picture'
            size={150}
            src={AlfredPicture}
          />
          <CardTitle title='Who is your contact ?' subtitle='If I may ask' />
        </div>
        <div className='contact__list'>
          <List>
            {
              _.map(theodoers, (theodoer, id) => {
                return (
                  <ListItem
                    primaryText={theodoer.first_name}
                    secondaryText={theodoer.last_name}
                    leftAvatar={<Avatar src={theodoer.image} />}
                    onClick={(event) => this.props.setContactId(id)}
                  />
                )
              })
            }
          </List>
        </div>
        <Link to='/success'>
          <RaisedButton className='contact__action-button' label='Confirm' fullWidth primary />
        </Link>
      </Card>
    )
  }
}

export default Contact
