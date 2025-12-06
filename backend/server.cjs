const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors")
const { createClient } = require("@supabase/supabase.js")
require('dotenv').config();


// ROUTES

const { jobsRouter } = require("./router/routes/jobs.js")
const { candidatesRouter } = require("./router/routes/candidates.js")
const { resumesRouter } = require("./router/routes/resumes.js")
const { applicantRouter } = require("./router/routes/applicant.js")


// SERVER
 
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: "http://localhost:5173/",
  methods: [GET, POST, PATCH, DELETE]
  
}

// MIDDLEWARE

app.use(cors(corsOptions));
app.use(express.json());


// INIT SUPABASE

const supaBase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)


// INIT SERVER

app.get('/', (req, res) => {
  res.json({ message : 'ATS API IS RUNNING' })
});

app.listen(PORT, (err) => {
  if(err){
    throw err
  }console.log(`Server is running on ${PORT}`)
});


// GET/POST FOR ROUTER


app.use(jobsRouter);
app.get('/jobs', jobsRouter);

app.use(candidatesRouter);
app.get('/candidates', candidatesRouter)

app.use('/api/applicant', applicantRouter)





// EXPORTS

module.exports = {
    supaBase
  

}


