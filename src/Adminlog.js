import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Adminlog = () => {
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const [code, setCode] = useState([]);
    const [ipad, setIpad] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() =>{
        fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))
    },[])

    const Post = (e) =>{
        e.preventDefault();
        const ip = ipad.ip
        const Country = ipad.country
        axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/login/data",{email,pass,ip,Country, code})
        .then(res =>{
            if(res.data.Status === "OK"){
                localStorage.setItem("token", res.data.token);
                window.location.href='/add'
            }else if(res.data.Status === "OKK"){
                alert("Account Created")
                window.location.reload();
            }else{
                alert("Wrong Password or Username")
                window.location.reload();
            }
        })
    }

    const Poseml = (e) =>{
        setEmail(e.target.value);
    }

    const Pospass = (e) =>{
        setPass(e.target.value);
    }

    const PosCode = (e) =>{
        setCode(e.target.value);
    }

  return (
    <div>
      <center>
        <h2>Admin Login</h2>
        <div className='Admin-Login'>
            <form onSubmit={Post}>
                <input type='text' placeholder='Enter Text here' onChange={Poseml} required /><br />
                <input type='text' placeholder='Enter Text here' onChange={Pospass} required /><br />
                <input type='text' placeholder='Random Code' onChange={PosCode} required /><br />
                
                <button type='submit'>Go</button>
            </form>
        </div>
      </center>
    </div>
  )
}

export default Adminlog
