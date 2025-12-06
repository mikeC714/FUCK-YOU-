const { Router } = require("express");
require('dotenv').config();


const jobsRouter = Router();
const listedJobs = require(process.env.JOB_FILE);


jobsRouter.get('/', (req, res) => res.json("All applicants info"));

// GET ALL JOBS

jobsRouter.get('/jobs', (req, res) => {
    res.json(listedJobs)
});

// JUST GET THE QUALIFICATIONS

jobsRouter.get('/jobs/:type/:qualifications', (req, res) => {
    const jobs = listedJobs.map(job => ({type : job.type, qualifications : job.qualifications}));
    res.json(jobs)
});








module.exports = { jobsRouter }
