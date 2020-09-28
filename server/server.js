import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../client/containers/App.jsx'

const PORT = 3300
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./public/dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Something went Wrong!!')
    }
    return res.send(
      data.replace(
        '<div id="app"></div>',
        `<div id="app">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'public','dist'), { maxAge: '30d' })
)

app.use(router)

app.listen(PORT, () => {
  console.log(`Server is listening on Port : ${PORT}`)
})