import CircularJson from "circular-json"
import { newUsers } from "../db/connection/conn.js";
import nodemailer from "nodemailer"


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rihina.techorzo@gmail.com',
        pass: 'wdufgyawvizccnwc '
    }
});

export const sendEmail = async (req, res) => {
    const { subject, des } = req.body;
    let emailIds = [];

    try {
        if (subject === 'Mobile Application') {
            emailIds.push('sherilrastogi04@gmail.com', 'hindoria846@gmail.com');
        } else if (subject === 'Web Application') {
            emailIds.push('saxena.ritank@gmail.com', 'daniel.elohi326@gmail.com');
        } else if (subject === 'Backend Issue') {
            emailIds.push('saxena.ritank@gmail.com');
        } else if (subject === 'Mobile App Networking') {
            emailIds.push('hindoria846@gmail.com');
        }

        if (!emailIds || !Array.isArray(emailIds) || emailIds.length === 0) {
            return res.status(400).json({ error: 'Invalid or empty emailIds array' });
        }

        let mailOptions = {
            from: 'rihina.techorzo@gmail.com',
            to: emailIds.join(', '), // Convert the array of email IDs to a comma-separated string
            subject,
            text: des
        };

        // Send email asynchronously
        const response = await transporter.sendMail(mailOptions);

        console.log('Email sent: ' + response.messageId);
        res.status(200).json(CircularJson.stringify({ response }));
    } catch (error) {
        console.error(error);
        res.status(500).json(CircularJson.stringify({ error: error.message }));
    }
};


export const registerUsers = async(req,res)=>{
    const {Name , number , email , Issue , pass} = req.body
    try{
         const users = newUsers({
            Name,
            number,
            email,
            Issue,
            pass
         })
         const registeredClients = await users.save()
         res.status(200).json(CircularJson.stringify({registeredClients}))
    }
    catch(err){
        res.status(500).json(CircularJson.stringify({err: err.message}))
    }
}

export const loginToSystem = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log(email, password);
        const user = await newUsers.findOne({ email: email });
        console.log(user);

        if (!user) {
            return res.status(404).json(CircularJson.stringify({ error: "User Not Found" }));
        }

        const userPass = user.pass;
        if (userPass === password) {
            return res.status(200).json(CircularJson.stringify({ user }));
        } else {
            return res.status(401).json(CircularJson.stringify({ error: "Invalid Username or Password" }));
        }

    } catch (err) {
        return res.status(500).json(CircularJson.stringify({ error: err.message }));
    }
}