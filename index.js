const express=require('express')
var cors = require('cors')
const courses= require ('./data/courses.json')
const app=express()
app.use(cors())
const port =process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('serverok')
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/courses/:id',(req,res)=>{
    const id=req.params.id
    const course=courses.find(course=>course.id==id)
    res.send(course)
})
app.listen(port,()=>{
    console.log('server running',port)
})