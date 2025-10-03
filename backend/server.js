import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
res.send('HELLO WORLD FROM BACKEND OF TASKKAR')
})

app.listen(3000)