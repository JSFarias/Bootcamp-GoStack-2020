import express from 'express'
import helloWorld from './helloWorld'

const app = express()

app.get('/', helloWorld)

app.listen(3333)