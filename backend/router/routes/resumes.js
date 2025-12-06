const { Router } = require("express");

const resumesRouter = Router();



resumesRouter.get('/', (req, res) => res.json("All applicants info"));

resumesRouter.get('/resumes/:resumesId', (req, res) => {
    const { resumesId } = res.params;
    res.json(`Resumes ID: ${resumesId}`)
});




module.exports = { resumesRouter }
