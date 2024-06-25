const express = require('express')
const logs = express.Router()

const logsArray = require('../models/captainLogs')

logs.get('/', (req,res)=>{
    res.json(logsArray)
})

//SHOW route for logs - localhost:3333/logs/
logs.get('/:arrayIndex', (req,res) => {
    const {arrayIndex} = req.params
    
    if(logsArray[arrayIndex]){
        res.status(200).json(logsArray[arrayIndex])
    } else {
        res.status(404).json({error: "Pet not found."})
    }
})

//POST route to create a new log
logs.post('/', (req,res) => {
    logsArray.push(req.body) 
    res.status(201).json(logsArray[logsArray.length - 1]) 
})

module.exports = logs