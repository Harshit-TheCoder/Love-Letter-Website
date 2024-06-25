import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import apologizeletters from "./components/apologizeletters";
import "../src/css/loveletterform.css";
const ApologizeLetterForm = () => {
    const [recipientName, setRecipientName] = useState('');
    const [yourName, setYourName] = useState('');
    const [bestMoments, setBestMoments] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRedirect(true); // Set the redirect state to true
    };

    // Render the Navigate component conditionally based on the redirect state
    if (redirect) {
        return <Navigate to={`/apologizeletter?recipientName=${recipientName}&yourName=${yourName}&bestMoments=${bestMoments}`} />;
    }

    return (
        <div>
            <Header />
            <Main>
                <div className="container" style={{ zIndex: "5", width: "800px", display: "flex", flexDirection: "column", gap: "10px", color:"yellow" }}>
                    <center><h1>Partner's Details:</h1></center>
                    <div className="container form-div">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <label>Your Partner's Name(Petname/Original Name):</label>
                            </div>
                            <div className="row">
                                <input type="text" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} required />
                            </div>
                            <div className="row">
                                <label>Your Name:</label>
                            </div>
                            <div className="row">
                                <input type="text" value={yourName} onChange={(e) => setYourName(e.target.value)} required />
                            </div>
                            <div className="row">
                                <label>Reason for Apologizing:</label>
                            </div>
                            <div className="row">
                                <label>I want to take full responsibility for.....</label>
                                <textarea value={bestMoments} onChange={(e) => setBestMoments(e.target.value)} />
                            </div>
                            <div className="row">
                                <div className="col-4"><button type="submit" className="btn btn-primary">Generate Apologization Letter</button></div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </Main>
        
        </div>
    );
};

export default ApologizeLetterForm;
