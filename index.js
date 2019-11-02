const express=require('express')

const app = express()
 
app.get('/',  (req, res)=> {
  res.sendFile(`${__dirname}/public/index.html`)
})
app.get('/contacts',  (req, res)=> {
    res.sendFile(`${__dirname}/public/contacts.html`)
  })
  app.get('/crocodil',  (req, res)=> {
    res.sendFile(`${__dirname}/public/crocodil.html`)
  })
 const port=3000
app.listen(port,'0.0.0.0',()=>{
    console.log(`Server started... http://0.0.0.0:${port}`)
})
