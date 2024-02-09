// const express = require('express')
import express from 'express'
const app = express()
import {PORT, HOST} from './config.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})