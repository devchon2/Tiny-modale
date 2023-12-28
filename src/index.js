import React from 'react';
import { render } from "react-dom";
import TinyModale from './lib/TinyModale.jsx';

const setNeedClose = () => true; // return true if you want to close the modale
const validateForm = () => true; // return true if you want to close the modale
const setActiveModale = () => true; // return true if you want to close the modale



const App = () => (
  <TinyModale  onClose={setNeedClose} isValidateForm={validateForm} setActiveModale={setActiveModale} modaleboxcolor="green" radius='20px' 
  buttonMargin="25px" btnOnClick={setActiveModale} showButton={true}  buttonTextContent="yeeeahhh" buttonRadius="50px" bgAnimation="fade" /> 
)

render(<App />, document.getElementById("root"));
