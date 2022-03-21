const express = require('express')
const cors = require('cors')
const { sql } = require('./dbconfig')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/companies', async(req,res)=>{
    try{
       const companies = await sql('select *from companies')
       res.send(companies)
    }catch(err){
       console.log(err);
       res.sendStatus(500)
    }
}) 

app.get('/servers', async(req,res)=>{
    try{
       const servers = await sql('select * from servers')
       res.send(servers)
    }catch(err){
       console.log(err);
       res.sendStatus(500)
    }
}) 

app.get('/serversCompanies', async(req,res)=>{
    try{
       const servers = await sql(`select servers.*, companies.name_company,
        companies.id as 'idCompany' from companies inner join servers
         on companies.id = servers.id_company;
       `)
       res.send(servers)
    }catch(err){
       console.log(err);
       res.sendStatus(500)
    }
}) 


app.put('/servers/:id_server', async(req,res)=>{
    try{
        await sql(`update servers
        set status_server =  !status_server
        where id = ${req.params.id_server}`)
        res.send({msg:"update"})
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
})


app.listen(3000)