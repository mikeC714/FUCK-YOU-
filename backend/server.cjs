const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors")
const { createClient } = require("@supabase/supabase.js")
const { google } = require("googleapis")
require('dotenv').config();


// ROUTES
const { candidatesRouter } = require("./router/routes/candidates.js")
const { authRouter } = require("./routes/authRoutes.js")



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


// INIT GOOGLE APIS

// REPLACE WITH REAL ENVIROMENT VARIABLES

const googleApi = google(
    process.env.GOOGLE_URL,
    process.env.GOOGLE_KEY
)

// INIT SUPABASE

const supaBase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)


// INIT SERVER

app.listen(PORT, (err) => {
  if(err){
    throw err
  }console.log(`Server is running on ${PORT}`)
});




// EXPORTS

module.exports = {
    supaBase
  

}


