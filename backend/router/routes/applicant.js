const express = require("express");
const { Router }= require('express')

const applicantRouter = Router();
const {getApplicants, getApplicant,createApplicant,updateApplicant,deleteApplicant} = require('../../controllers/applicantControllers')


// DISPLAYING APPLICANTS


//GET ALL APPLICANTS
applicantRouter.get('/', getApplicants);

// GET ONE APPLICANT
applicantRouter.get('/read/:id', getApplicant);

// CREATE AN APPLICANT
applicantRouter.post('/create/:id', createApplicant);


// UPDATE APPLICANT
applicantRouter.put('/update/:id', updateApplicant);

// DELETE
applicantRouter.delete('/delete/:id', deleteApplicant);

module.exports = {applicantRouter}