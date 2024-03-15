// const express = require('express')
import express from 'express'
const app = express()
import {PORT, HOST} from './config.js'


import logger  from './middlewares/logger.js'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

app.use(express.json())
app.use(logger)

app.use('/user', userRouter)
app.use('/product', productRouter)

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'})
})

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})