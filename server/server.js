import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../client/containers/App.jsx'
import 'isomorphic-fetch'

const PORT = 4400
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./public/dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Something went Wrong!!')
    }
    Promise.all([fetch("https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop"),
    fetch("https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=0&category_id=0")]).then(res=>Promise.all(res.map(e=>e.json()))).then(data=>{
      return res.send(`<!doctype html>
    <html lang="en"><head>
        <meta charset="UTF-8">
        <title>Task 28th sept</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>
    <body>
        <div id="app">${ReactDOMServer.renderToString(<App category = {data[0].category} products = {data[1].products} />)}</div>
        <script src="index.bundle.js"></script>
    </body>
    </html>`
    )
    }).catch(err=>{
      res.sendStatus(500)
    })
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