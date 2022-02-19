const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))


app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)


const news=require('../tools/news')
app.get('/',(req,res)=>{
  news((error,data)=>{ 
    if(error){
    return res.send({
      error:error,
    })
    } res.render('index',{
      data:data,
    })

  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
