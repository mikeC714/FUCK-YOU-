const express = require("express");
import supaBase from "../config/supabase.js"

import { getCandidates, getCandidate, updateCandidate, deleteCandidate } from "../controllers/candidateController.js"

const candidatesRouter = express.Router();

// GET ALL CANDIDATES

candidatesRouter.get('/candidates', getCandidates);

// GET A SINGLE CANDIDATE

candidatesRouter.get('/candidates/:name', getCandidate);

// UPDATE CANDIDATE 

candidatesRouter.patch('/candidates/:name/update', updateCandidate);

// DELETE CANDIDATE 

candidatesRouter.delete('/candidates/delete', deleteCandidate)

// CREATE CANDIDATE 
// CREATING A CANDIDATE WILL BE CONTROLLED BY resumeProcessor








module.exports = { candidatesRouter }
