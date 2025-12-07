const express = require("express");

import { login, signUp, signOut, requireAuth } from "../../controllers/authControllers"


const router = express.Router()

router.post('/login', login);
router.post('/signUp', signUp);
router.post('/signOut', requireAuth, signOut);
router.get('signIn',requireAuth ,signIn)

