const express = require("express");
import supaBase from "../config/supabase.js"

//  GET ALL CANDIDATES 

const getCandidates = async (req, res) => {
    try{
        const { data, error } = await supaBase
            .from('candidates')
            .select('*');

        if(error) throw error;
        
        res.status(200).json({ success: true, data });

    }catch(error){
        next(error);
    }
};


//  GET A CANDIDATE


const getCandidate = async (req, res) => {

    const { name } = req.body;

    try{
        const { data, error } = await supaBase  
            .from('candidates')
            .select('*')
            .eq('name', name)
            .single();

        if(error) throw error

        res.status(200).json({ success: true, data });
    }catch(error){
        next(error);
    }
};


// RESUME PROCESSOR WILL HANDLE CREATING A CANDIDATE




// UPDATING CANDIDATES

const updateCandidate = async (req,res) => {
    try{
        const { status, notes } = req.body

        // VALID INPUTS FOR STATUS

        if(status && ![ 'new', 'hired', 'interviewed', 'offer', 'rejected' ]){
            return res.status(400).json({ success: false, error: error.message })
        };



        if(status === 'offer'){
            // SEND NOTI TO APPLICANT
        };

        if(status === 'hired'){
            // SEND NOTI TO APPLICANT
        };

        if(status === 'rejected'){
            // SEND NOTI TO APPLICANT
            // AUDIT APPLICANT DATA FROM SUPABASE 
        };

        const updates = {   
            ...(status && {status}),
            ...(notes && {notes}),
            updatedAt: new Date().toISOString()
        }

        const { data, error } = await supaBase
            .from('candidates')
            .update(updates)
            .eq('id', req.params.id)
            .select('*')
            .single();

        if(error){
            return res.status(400).json({ error: error.message })
        }

        res.json({ success: true, data });


    }catch(error){
        next(error);
    }
};



// DELETE CANDIDATE

const deleteCandidate = async (req, res) => {

    const { id } = req.params;

    if(!id){
        return res.status(400).json({ error: "Candidate ID not found" })
    }

    try{
        // DELETE A SINGLE CANDIDATE
        const { data: {candidate}, candiadateError } = await supabase
            .from('candidates')
            .update({ is_deleted: true })
            .eq('id', id)
            .single();


        if(!data){
            return res.status(400).json({ error: error.message });
        }
            
        res.status(200).json({ 
            message: `Candidate ${id} Has Successfully Been Deleted`, 
            candidate
        });

        // DELETE  A BATCH OF CANDIDATES

        const { data: {candidates}, candidatesError } = await supabase
            .from('candidates')
            .update({ is_deleted: true })
            .in('candidates', candidates);

        if(candidatesError) throw candidatesError;

        res.status(200).json({ message: "The selected Candidates have been deleted" });

    }catch(error){ 
        next(error);
    }
};



module.exports = {
    getCandidates,
    getCandidate,
    updateCandidate,
    deleteCandidate
}


