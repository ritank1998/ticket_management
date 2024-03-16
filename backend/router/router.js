import express from "express"
import { sendEmail } from "../routes/routes.js"

const router = express.Router()

router.post("/sendticket" , sendEmail)



export default router