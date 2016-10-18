'use strict'

const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const bodyParser = require('body-parser')
const request = require('request')
const logger = require('./logger')()
const jsonfile = require('jsonfile')

var users = require('./users.json')
const app = express()
const paths = config.utils_paths

const token = 'EAAQC0UV5EGsBAD2HpAfG02StqTZBhSOTCFKWenxMSdQC4QjuoBJJxWQKVmCCWR68UPXZCcyqPbIxTx5wbWgsKOgMZAQDbGZBFgwVhGnmR0TVAUNElVBe4fUgg0Y14LSCZCm9bjqZAw8BzRPfeJEeMm1glXPzNzrfPk7IOpOBoUBAZDZD'

if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enable webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : paths.client(),
    hot         : true,
    quiet       : config.compiler_quiet,
    noInfo      : config.compiler_quiet,
    lazy        : false,
    stats       : config.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(paths.client('static')))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(paths.dist()))
}

var isUserKnown = function (senderId) {
  return (senderId in users)
}

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Process application/json
app.use(bodyParser.json())

// for Facebook verification
app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'theodo-hackfred') {
    res.send(req.query['hub.challenge'])
  }
  res.send('Error, wrong token')
})

app.get('/api/users/', function (req, res) {
  res.send(users)
})

app.post('/webhook/', function (req, res) {
  let messagingEvents = req.body.entry[0].messaging
  for (let i = 0; i < messagingEvents.length; i++) {
    let event = req.body.entry[0].messaging[i]
    let sender = event.sender.id

    logger.info('Sender ID ', sender)
    if (event.message && event.message.text) {
      let text = event.message.text
      if (text.toLowerCase().startsWith('merci')) {
        sendTextMessage(sender, 'Je suis là pour vous servir, sir!')
        continue
      }

      if (text.toLowerCase().startsWith('code?')) {
        sendTextMessage(sender, 'Le code est 31A45, sir!')
        continue
      }

      if (text.startsWith('/addMe')) {
        if (isUserKnown(sender)) {
          sendTextMessage(sender, 'You are already on the list, sir!')
          continue
        }

        text = text.replace('/addMe', '').trim().split(' ')
        if (text.length < 2) {
          sendTextMessage(sender, 'Be polite! I want your first name AND your last name.')
          continue
        }
        var firstName = text[0]
        var lastName = text[1]

        users[id] = {
          first_name: firstName,
          last_name: lastName
        }

        sendTextMessage(sender, 'You have been successfully added to the list, sir!')
        jsonfile.writeFileSync('./server/users.json', users)
      } else {
        if (!isUserKnown(sender)) {
          sendTextMessage(sender, 'I do not know you. Piss off.')
        } else {
        // sendTextMessage(sender, "Hello, your ID is " + sender + " . echo: " + text.substring(0, 200))
          var elements = []
          for (var userId in users) {
            var user = users[userId]
            elements.push({
              'title': user.first_name + ' ' + user.last_name,
              'subtitle': 'Theodoer',
              'image_url': user.image,
              'buttons': [{
                'type': 'web_url',
                'url': 'https://www.messenger.com',
                'title': 'web url'
              }]
            })
          }
          sendGenericMessage(sender, elements)
        }
      }
    }
  }
  res.sendStatus(200)
})

app.post('/api/alfred/:id', function (req, res) {
  sendTextMessage(req.params.id, req.body.message)
  logger.info(`Message ${req.body.message} sent to : ${req.params.id}`)
  res.sendStatus(200)
})

function sendTextMessage (sender, text) {
  let messageData = { text:text }
  sendData(sender, messageData)
}

function sendGenericMessage (sender, elements) {
  let messageData = {
    'attachment': {
      'type': 'template',
      'payload': {
        'template_type': 'generic',
        'elements': elements
      }
    }
  }
  sendData(sender, messageData)
}

function sendData (sender, messageData) {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: messageData
    }
  }, function (error, response, body) {
    if (error) {
      console.log('Error sending messages: ', error)
    } else if (response.body.error) {
      console.log('Error: ', response.body.error)
    }
  })
}

module.exports = app
