import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import apologizeletters from "./components/apologizeletters";
import { useLocation, Navigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
const ApologizeLetter=()=>{
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const recipientName = urlParams.get('recipientName');
    const yourName = urlParams.get('yourName');
    const bestMoments = urlParams.get('bestMoments');
    console.log("data sent");
    console.log(`${recipientName}`);
    console.log(`${yourName}`);
    console.log(`${bestMoments}`);
    const generateLetter = () => {
        const randomNumber = Math.floor(Math.random()*1);
    
        var letterTemplate = apologizeletters[randomNumber];
        letterTemplate = letterTemplate.replace(/RECIPIENTNAME/g, recipientName);
        letterTemplate = letterTemplate.replace(/YOURNAME/g, yourName);
        letterTemplate = letterTemplate.replace(/BESTMOMENTS/g, bestMoments);
    
        return letterTemplate;
      };
      const generatePDF=()=>{
        const element = document.getElementById('letter');
        element.style.color='black';
        html2pdf().from(element).save('Love Letter');
        // element.style.color='white';
      };
    //   const generateDOCX=()=>{
    //     const element = document.getElementById('letter');
    //     const content = element.innerHTML;
    //     exportWord('Love Letter', content);
    //   };
      function copyToClipboard(){
        const content = document.getElementById('letter').innerText;
        navigator.clipboard.writeText(content)
        .then(()=>{
            console.log("Copied to clipboard successfully");
        })
        .catch((error)=>{
            console.log("Error while copying to clipboard");
        });
      }
    return(
        <div>
            <Header />
            <Main>
                <div className="container" style={{ zIndex: "5", width:"1000px", display:"flex", flexDirection:"column", gap:"10px",}}>
                    <div className="row" style={{ overflowY:"scroll", height:"500px"}}>
                        <pre id="letter" style={{color:"white", fontFamily:"sans-serif", fontSize:"20px", fontStyle:"italic",fontWeight:"500", width:"1000px" }} contentEditable>{generateLetter()}</pre>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={generatePDF}>Save as PDF</button>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={generateDOCX}>Save as Word Document</button>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={copyToClipboard}>Copy to clipboard</button>
                        </div>
                    </div>
                </div>
            </Main>
        
        </div>
    );
};
export default ApologizeLetter;