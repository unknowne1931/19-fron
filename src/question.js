import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Question = () => {

  const [data, setData] = useState([])
  const Qno = localStorage.getItem("Qno");
  const [verrii, setVerrii] = useState([]);
  const [lock, setLock] = useState([]);
  const [ipad, setIpad] = useState([]);

  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const ip = queryParm.get('id')
    localStorage.setItem('ip', ip);


    const resetTimer = () => {
      setRunning(false);
      setSeconds(11);
      localStorage.setItem('remainingSeconds', 11);
    };


    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 11;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [running, setRunning] = useState(false);

    const startTimer = () => {
      setRunning(true);
    };

    useEffect(() => {

      startTimer()
      //timer
  
      let intervalId;
  
      /*
      if (running && seconds > 0) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => {
            const newSeconds = prevSeconds - 1;
            localStorage.setItem('remainingSeconds', newSeconds);
            return newSeconds;
          });
        }, 1000); // Update the timer every 1000ms (1 second)
      }
      */
  
      return () => {
        clearInterval(intervalId);
      };
      //timer
  
    }, [running, seconds])
  
  
  
  
    localStorage.setItem('countdownSeconds', seconds.toString());
  
  
    if(seconds === 0){
      window.location.href='/'
    }else if(seconds > 11){
      window.location.href='/'
    }
  
    ///ti

    const [upii1 , setUpii1] = useState([])
    const [upii2 , setUpii2] = useState([])

  useEffect(()=>{
    axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/verify/account/key",{ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        setLock(res.data.user);
      }
    })

    fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))

        fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/question/singel/verify/data/01/${ip}`)
        .then(res => res.json())
        .then(data => setVerrii(data))

    if(Qno !== null){
      fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/question/singel/01/${Qno}`)
      .then(res => res.json())
      .then(data => setData(data));
    }
    fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/question/singel/verify/data/01/sakhd/sjkh/dsf/dfsd/${ip}`)
    .then(res => res.json())
    .then(data => setUpii1(data))

    fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/question/singel/verify/data/01/sakhd/${ip}`)
    .then(res => res.json())
    .then(data => setUpii2(data))

  },[])


  const Button1 = () =>{
    resetTimer();
    const Option  = "A"
    axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/answer/check/question/correct/or/wrong",{Option, Qno, ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                window.location.href=`/form?id=${ip}`
              }
            })
          }
        })
      }else{
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }

  const Button2 = () =>{
    resetTimer();
    const Option  = "B"
    axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/answer/check/question/correct/or/wrong",{Option, Qno, ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                window.location.href=`/form?id=${ip}`
              }
            })
          }
        })
      }else{
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }

  const Button3 = () =>{
    resetTimer();
    const Option  = "C"
    axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/answer/check/question/correct/or/wrong",{Option, Qno, ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                window.location.href=`/form?id=${ip}`
              }
            })
          }
        })
      }else{
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }



  const Button4 = () =>{
    resetTimer();
    const Option  = "D"
    axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/answer/check/question/correct/or/wrong",{Option, Qno, ip})
    .then(res =>{
      if(res.data.Status === "OK"){
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                alert("Contact Admin on Instagram ID : 'stawro'")
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href=`/form?id=${ip}`
              }else{
                window.location.href=`/form?id=${ip}`
              }
            })
          }
        })
      }else{
        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }

  return (
    <div>
      {verrii.ip
      ?
      <center>
        <span>Not Found Ip</span>
      </center>
      :
      <div>
        <center>
        <div className='question-div-01'>
            <span className='question-div-01-span-01'>Seconds : <span className='question-div-01-span-01-span-01'>{seconds}</span></span><span></span>
            <div className='question-div-02'>
                <span className='question-div-02-span-01'>{data.question}</span><br />

                {data.img !== "" &&
                  <div className='question-div-cnt-04'>
                    <img src={data.img}/>
                  </div>
                }
                
                {lock.ip ?
                <div>
                  <span>After Payment, The new Game Begins</span>
                </div>
                :
                <div className='question-div-03'>
                  <button onClick={Button1}>{data.optionA}</button> <button onClick={Button2}>{data.optionB}</button><br />
                  <button onClick={Button3}>{data.optionC}</button> <button onClick={Button4}>{data.optionD}</button>
                </div>
                
                }
            </div>
        </div>
        </center>
      </div>
        }
    </div>
  )
}

export default Question;