import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [ping, setPing] = useState("")
  useEffect(  () => {
    async function pingServer(){
     const pong = await axios.get("/ping")
     console.log(pong)
     setPing(pong.data.msg)
    }
    pingServer()
  }, [])
  return (
    <div>
      Hello World!
      Buildin testausta
      ping? {ping}
    </div>
  );
}

export default App;
