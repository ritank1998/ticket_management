import React, { useState } from "react";

const Body = () => {
    const [subject, setSubject] = useState('');
    const [des, setDes] = useState('');

    const takeSubject = (e) => {
        setSubject(e.target.value);
    }

    const ticketDescription = (e) => {
        setDes(e.target.value);
    }

    const handleSubmit = async () => {
        const payload = {
            subject,
            des
        };
        
        try {
            const response = await fetch('http://localhost:1203/tickets/sendticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload) // Stringify the payload object
            });

            if (response.ok) {
                alert("Your Ticket Is Sent Successfully !!!");
            } else {
                alert("There is Some Error, Please Try Again");
            }
        } catch (error) {
            console.error("Error:", error.message);
            alert("There is Some Error, Please Try Again");
        }
    }

    return (
        <>
            <div className="mb-3 mt-4 col-sm-8 offset-md-2">
                <label htmlFor="subjectDropdown" className="form-label">Subject</label>
                <select className="form-select" id="subjectDropdown" onChange={takeSubject}>
                    <option selected disabled>Select a subject</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Backend Issue">Backend Issue</option>
                    <option value="Mobile App Networking">Mobile App Networking</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Payments Recovery">Payments Recovery</option>
                </select>
            </div>

            <div className="mb-3 mt-4 col-sm-8 offset-md-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Ticket Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={ticketDescription}></textarea>
            </div>
            <button type="button" className="btn btn-primary mt-4 btn-lg offset-md-5" onClick={handleSubmit}>SEND TICKET</button>
        </>
    );
}

export default Body;
