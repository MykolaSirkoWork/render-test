import React, { useState} from 'react'
import './App.css';
import {useForceUpdate, Updates} from "./CheckRerender";




function App() {
  const forceUpdate = useForceUpdate();


  return (
    <div className="App">

      <button onClick={forceUpdate}>Rerender check Parrent component</button>
      <header className="App-header">
         <Updates updates={'eventUpdates.current++'}/>

      </header>
    </div>
  );
}



export default App ;
