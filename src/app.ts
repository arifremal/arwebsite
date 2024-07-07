import express, { Application, } from 'express'
const app: Application = express()
import cors from 'cors'
import { StudentRoutes } from './app/Modules/strudent/student.route'

// parser
app.use(express.json())
app.use(cors())
app.use('/api/v1/students',StudentRoutes)

app.get('/', )

console.log(process.cwd())

export default app;

