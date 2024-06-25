import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import proposalLetters from "./components/proposeletters";
import { useLocation, Navigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
const ProposeLetter=()=>{
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const rName = urlParams.get('rName');
    const yName = urlParams.get('yName');
    const bMoments = urlParams.get('bMoments');
    console.log("data sent");
    console.log(`${rName}`);
    console.log(`${yName}`);
    console.log(`${bMoments}`);
    const generateLetter = () => {
        if (!rName || !yName || !bMoments) {
            return "Error: Missing required parameters";
        }
        else{
            const randomNumber = Math.floor(Math.random()*4);
        
            var letterTemplate = proposalLetters[randomNumber];
            letterTemplate = letterTemplate.replace(/RECIPIENTNAME/g, rName);
            letterTemplate = letterTemplate.replace(/YOURNAME/g, yName);
            letterTemplate = letterTemplate.replace(/BESTMOMENTS/g, bMoments);
        }
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
export default ProposeLetter;