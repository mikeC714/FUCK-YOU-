const express = require("express")
const { google } = require("googleapis")
import supaBase from "../config/supabase.js"

const gmailRouter = express.Router();


// GENERATE THE AUHTENTICATION URL TO CONNECT USERS GMAIL

gmailRouter.get('/connect', (req,res) => {
    
    const oAuth = google.auth.OAuth2(
        process.env.GOOGLE_ID,
        process.env.GOOGLE_KEY,
        'http://localhost:3000/api/callback'
    );

    // THE SCOPES IS WHAT THE USER IS CONSENTING TO 
    //  SINCE ALL I NEED IS TO READ THE USERS GMAIL GMAIL.READONLY IS ALL THAT IS NEEDED

    const scopes = ['https://www.googleapis.com/auth/gmail.readonly'];

    const authUrl = oAuth.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        prompt: 'consent'
    })
    res.redirect(authUrl)
});

// CALLBACK TO GIVEN URL AFTER USER HAS GIVEN CONSENT

gmailRouter.get('/callback', async (req, res) => {
    try{
        const { code } = req.query;

        if(!code){
           return res.status(400).send('No authorization was granted');
        }
        
        const oAuth =  google.auth.OAuth2(
        process.env.GOOGLE_ID,
        process.env.GOOGLE_KEY,
        'http://localhost:3000/api/callback'
    );

    const { tokens } = await oAuth.getToken(code);

    // // TEST

    // console.log('Tokens Recieved', {
    //     access_token: tokens.access_token ? 'YES' : 'NO',
    //     refresh_token: tokens.refresh_token ? 'YES' : 'NO'
    // });
        
        await supaBase 
            .from('profiles')
            .upsert({
                id: req.user.id,
                authId: req.user.id,
                gmail_access_token: tokens.access_token,
                gmail_refresh_token: tokens.refresh_token,
                gmail_connected_at: new Date().toISOString()
            });
        res.send("Gmail has successfully been connected")
    } catch(error){
        console.error('OAuth error:', error);
        res.status(500).send('Error connecting Gmail');
    }
});
