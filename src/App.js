import React, { useEffect, useState,createContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Play from './Play';
import "./App.css"
import Question from './question';
import Claimform from './claimform';
import Adminlog from './Adminlog';
import axios from 'axios';
import Updateques from './updateques';
import Qustview from './qustview';
import Monitor from './Monitor';


export const user = createContext();

const App = () => {

  const [email, setEmail] = useState([])
  const token = localStorage.getItem("token");
  const [ipad, setIpad] = useState([])
  useEffect(()=>{
    fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))
        localStorage.setItem("jki",ipad.ip)

    if(token != null){
      axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/verify/token",{token})
    .then(res=>{
      if(res.data.Status === "OK"){
        setEmail(res.data.decode.email)
        localStorage.setItem("email",res.data.decode.email)
      }else{
        localStorage.removeItem("token")
        localStorage.removeItem("item");
        localStorage.removeItem("email");
      }
    })
    }
  },[])
  return (
    <div>
      <center>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Play/>}/>
            <Route path='/play' element={<Question/>}/>
            <Route path='/form' element={<Claimform/>}/>
            <Route path='/login' element={token ? <Updateques /> : <Adminlog/>}/>
            <Route path='/add' element={token ? <Updateques/> : <Play/>} />
            <Route path='/view' element={token ? <Qustview/> : <Play/>} />
            <Route path='/monit' element={token ? <Monitor /> : <Play />} /> 
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App
