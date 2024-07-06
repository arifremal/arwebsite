import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'

// parser
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  
  res.send()
})

console.log(process.cwd())

export default app;

