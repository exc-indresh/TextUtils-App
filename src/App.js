// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')  // whether the light mode of navbar is enabled or not
  const [alert, setAlert] = useState(null);
  const [enableText, setEnableText] = useState('Enable Dark Mode');



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled ", "success");
      setEnableText('Enable Light Mode')
      // changing title of textutils 
      document.title = 'TextUtils - Dark Mode'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      setEnableText('Enable Dark Mode')
      document.title = 'TextUtils - Light Mode'

    }
  }

  const backGrey = () => {
    document.body.style.backgroundColor = 'grey';
    document.getElementById('myBox').style.background = 'none';
    setMode('dark');

  }
  const backGreen = () => {
    document.body.style.backgroundColor = '#c45dcb';
    document.getElementById('myBox').style.background = 'none';
    setMode('dark');
  }
  const backRed = () => {
    document.body.style.backgroundColor = '#62b7b7';
    document.getElementById('myBox').style.background = 'none';
    setMode('dark');
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutTextUtils="AboutTextUtils" mode={mode} toggleMode={toggleMode} backGrey={backGrey} backGreen={backGreen} backRed={backRed} enableText={enableText} />
        <Alert alert={alert} />
        {/* <Navbar/> */}


        <Routes>
          <Route path="/" element={<TextForm/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
