import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import LoveLetter from './LoveLetter';
import ProposeLetter from './ProposeLetter';
import ApologizeLetter from './ApologizeLetter';
import LoveLetterForm from './LoveLetterForm';
import ProposeLetterForm from './ProposeLetterForm';
import ApologizeLetterForm from './ApologizeLetterForm';
function App() {

  return (

      <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner_details" element={<LoveLetterForm />} />
          <Route path="/loveletter" element={<LoveLetter />} />
          <Route path="/crush_details" element={<ProposeLetterForm />} />
          <Route path="/proposeletter" element={<ProposeLetter />} />
          <Route path="/apologize_details" element={<ApologizeLetterForm />} />
          <Route path="/apologizeletter" element={<ApologizeLetter />} />
        </Routes>
      </Router>
   
  );
}

export default App;
