const { Router } = require("express");
import supaBase from "../../server.cjs"
import {  getCandidates, getCandidate, updateCandidate, deleteCandidate } from "../../controllers/candidateController.js"
require('dotenv').config();


const candidatesRouter = Router();
const candidateSchema = 

candidatesRouter.get('/', (req, res) => {
    try{
        
    }catch(error){
    }
});




module.exports = { candidatesRouter }
