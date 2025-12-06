const express = require("express");
const ApplicantSchema = require("../models/applicantModel.js")

const getApplicants = async (req, res) => {

    // GET ALL APPLICANTS
    // SEND APPLICANTS TO CLAUDE API 

    try{
        const applicants = await ApplicantSchema.find({});
        res.status(200).json(applicants)





    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const getApplicant = async (req,res) => {
    try{
        const {id} = req.params;
        const applicant = await ApplicantSchema.findById(id);
        res.status(200).json(applicant)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const createApplicant = async (req,res) => {
    try {
        const applicant = await ApplicantSchema.create(req.body);
        res.status(200).json(applicant);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateApplicant = async (req,res) => {
    try{
        const {id} = req.params;
        const applicant = await ApplicantSchema.findByIdAndUpdate(id, req.body);
        if(!applicant){
            return res.status(404).json({message: "Applicant Not Found"})
        }
        const updatedApplicant = await ApplicantSchema.findById(id);
        res.status(200).json(updatedApplicant)

    }catch(err) {
        res.status(500).json({message: err.message})
    }
}

const deleteApplicant = async (req,res) => {
    try{
        const {id} = req.params;
        const applicant = await ApplicantSchema.findByIdAndDelete(id);
        if(!applicant){
            return res.status(404).json({message: `There is no applicant with ${id} as their ID`})
        }
        const deletedApplicant = await ApplicantSchema.findById(id);
        res.status(200).json(deletedApplicant);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}







module.exports = {
    getApplicants, // ALL APPLICANTS
    getApplicant,  // AN APPLICANT
    createApplicant, // CREATE APPLICANT
    updateApplicant, // UPDATE APPLICANT
    deleteApplicant  // DELETE APPLICANT
}