import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "../src/css/loveletterform.css";
const ProposeLetterForm = () => {
    const [rName, setRName] = useState('');
    const [yName, setYName] = useState('');
    const [bMoments, setBMoments] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRedirect(true); // Set the redirect state to true
    };

    // Render the Navigate component conditionally based on the redirect state
    if (redirect) {
        return <Navigate to={`/proposeletter?rName=${rName}&yName=${yName}&bMoments=${bMoments}`} />;
    }

    return (
        <div>
            <Header />
            <Main>
                <div className="container" style={{ zIndex: "5", width: "800px", display: "flex", flexDirection: "column", gap: "10px", color:"yellow" }}>
                    <center><h1>Crush's Details:</h1></center>
                    <div className="container form-div">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <label>Your Crush's Name:</label>
                            </div>
                            <div className="row">
                                <input type="text" value={rName} onChange={(e) => setRName(e.target.value)} required />
                            </div>
                            <div className="row">
                                <label>Your Name:</label>
                            </div>
                            <div className="row">
                                <input type="text" value={yName} onChange={(e) => setYName(e.target.value)} required />
                            </div>
                            <div className="row">
                                <label>Best Moments with Partner:</label>
                            </div>
                            <div className="row">
                                <label>Whenever you are by my side....</label>
                                <textarea value={bMoments} onChange={(e) => setBMoments(e.target.value)} />
                            </div>
                            <div className="row">
                                <div className="col-4"><button type="submit" className="btn btn-primary">Generate Proposal Letter</button></div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </Main>
        
        </div>
    );
};

export default ProposeLetterForm;
