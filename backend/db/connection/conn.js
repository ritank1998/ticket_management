import mongoose from "mongoose";

const db1 = mongoose.createConnection("mongodb://127.0.0.1:27017/Ticket_System")
const db2 = mongoose.createConnection("mongodb://127.0.0.1:27017/Ticket_System")



export const newUsers = db1.model("signedUpClient", mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        requires: true
    },
    email: {
        type: String,
        required: true
    },
    Issue: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
}))

