import React from "react";
import Header  from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";


function Home() {
    
  
    return (

        <div>
          <Header />
          <Main>
              <div  style={{display:"flex", flexDirection:"column", gap:"5px", alignItems:"center", justifyContent:'center', height:"60vh", color:"white"}}>
                <div><h1 style={{fontSize:"80px"}}>HeartScripts</h1></div>
                <div><h5 style={{fontSize:"30px"}}>"Where Words Write Love Stories: Let Your Heart Speak with HeartScripts!"</h5></div>
                
              </div>
          </Main>
        </div>
          
          
      
        
   

      
    );
  }
export default Home;
