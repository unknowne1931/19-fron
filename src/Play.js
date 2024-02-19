import React, { useEffect, useState } from 'react'
import axios from "axios"

const Play = () => {

    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 11;
    const [seconds, setSeconds] = useState(initialSeconds);

    const [Qno , setQno] = useState(null);
    const [ipad, setIpad] = useState([]);
    const [Lock, setLock] = useState([]);

    const ip = ipad.ip;

    const [upii1, setUpii1] = useState([]);
    const [upii2, setUpii2] = useState([]);
    const [anmt, setAnmt] = useState([]);

    useEffect(()=>{
        generateRandomNumber();

        fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))

        const key = "sjhdhg7dshkudfshg"
        fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/q/amount/data/all?key=${key}`)
            .then(res => res.json())
            .then(data => setAnmt(data));

    },[])

    const ipd = localStorage.getItem("jki")

    localStorage.setItem("jki", ipad.ip)

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 100
        setQno(newRandomNumber);
    }

    const Post = (e) =>{
        e.preventDefault();
        const ip = ipad.ip
        const Country = ipad.country
        axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/verify/account/key",{ip})
            .then(res =>{
            if(res.data.Status === "OK"){
                alert("Play After money Credited to you'r Account")
            }else{
                axios.post('http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/data/upi/post/to/db',{ip ,Country, Qno})
                .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.setItem("jki", ip)
                        localStorage.setItem("Qno" , Qno)
                        localStorage.setItem('countdownSeconds', seconds.toString());
                        localStorage.setItem('remainingSeconds', 11);
                        window.location.href=`/play?id=${ip}`
                    }else{
                        alert("You Had Played Before");
                    }
                })
            }
            })
    }
  return (
    <div className='play-body'>
      <center>
        <h1 className='play-h1'>sta<span className='play-h1-span-w'>W</span>ro</h1>
        <span className='play-span-01'>* On Playing don't connect Network with Wifi, VPN.</span><br/>
        <span className='play-span-01'>* Answer Singel Question in Between <span>11 Seconds</span>.</span><br/>
        {anmt.map((user,i) =>{
            return(
                <span className='play-span-02'>Play and Get ₹ {user.Amount}.00</span>
            )
        })}
        <div className='div-cnt-01'>
            
                <div>
                    <button onClick={Post} >start</button>
                </div>
        </div>
      </center>
    </div>
  )
}

export default Play
