import express from "express"
import { sendEmail } from "../routes/routes.js"
import { registerUsers , loginToSystem } from "../routes/routes.js"

const router = express.Router()

router.post("/sendticket" , sendEmail)
router.post("/login" , registerUsers)
router.post("/signin" , loginToSystem)


export default router