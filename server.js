const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/temperature",(req,res)=>{
res.json({value:28})
})

app.get("/sound",(req,res)=>{
res.json({value:65})
})

app.get("/light",(req,res)=>{
res.json({value:350})
})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})