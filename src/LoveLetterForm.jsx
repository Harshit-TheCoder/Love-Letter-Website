import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "../src/css/index.css";
import "../src/css/loveletterform.css";
const LoveLetterForm = () => {
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
        return <Navigate to={`/loveletter?recipientName=${recipientName}&yourName=${yourName}&bestMoments=${bestMoments}`} />;
    }

    return (
        <div>
            <Header />
            <Main>
                <div className="container" >
                    <center><h1>Partner's Details:</h1></center>
                    <div className="container form-div">
                        <form onSubmit={handleSubmit} >
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
                                <label>Best Moments with Partner:</label>
                            </div>
                            <div className="row">
                                <label>I always recall some of the best memories shared with you like....</label>
                                <textarea value={bestMoments} onChange={(e) => setBestMoments(e.target.value)} />
                            </div>
                            <div className="row">
                                <div className="col-4"><button type="submit" className="btn btn-primary">Generate Love Letter</button></div>

                            </div>
                        </form>
                    </div>
                </div>
            </Main>
        
        </div>
    );
};

export default LoveLetterForm;
