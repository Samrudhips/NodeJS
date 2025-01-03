import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/userRouter.js'
import morgan from 'morgan'
import chalk from 'chalk'

let app = express()

app.use(morgan('combined'))
//load the env - values like post,host,dbinfo,secretkey
dotenv.config({'path':"./config/dev.env"})
let port = process.env.PORT 
let host=process.env.HOST_NAME 

//API URL : http://127.0.0.1:8082/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Root Req"})
})

app.use("/user",userRouter)
app.use("/prod",productRouter)

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(chalk.bgGreen(`Server Running: http://${host}:${port}/`))
})