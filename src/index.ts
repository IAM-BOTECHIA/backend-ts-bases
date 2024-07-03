
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Item } from './models/item'
import Category from './models/category'
import { KEY_CATEGORIES } from './enums/enums'
console.log('backend-ts-bases')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})
