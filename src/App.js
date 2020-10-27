import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';

function App() {
  return (
    <div className="App">
    <h1 className="leadersboardHeading">Leadersboard</h1>
      <Student name="John Doe" univeristy="NUST" score={347}/>
      <Student name="Rizwan" univeristy="NED Unveristy" score={345}/>
      <Student name="Shahzaib" univeristy="University Of Malaya" score={340}/>
      <Student name="Laiba Ovais" univeristy="NED University" score={346}/>
    </div>
  );
}

export default App;
