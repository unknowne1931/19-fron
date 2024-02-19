import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Monitor = () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const [len, setLen] = useState([]);

    const [data, setDat] = useState([]);
    const [upi, setUpi ] = useState([]);
    const [user, setUser] = useState([]);
    const [len1, setLen1] = useState([]);
    const [len2, setLen2] = useState([]);
    const [tot, setTot] = useState([]);
    const [Alpaid, setAlpaid] = useState([]);
    const [ALLpl, setAllpl] = useState([]);
    const [Alllen4, setAlllen4] = useState([]);
    const [live, setLive] = useState([]);
    const [anmt, setAnmt] = useState([]);

    const key = "sjhdhg7dshkudf"

    useEffect(()=>{
        if(token){
            fetch("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/questionnns/datata/jdsjkds/fdsfdsnbc/f/f/f/s/sdf/f/b//dg//sd/g/sdg/ds/g/dsg/ds/g/sdg/ds/gsd/g/dsg/ds/gd/get")
            .then(res => res.json())
            .then(data => setDat(data));

            fetch("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/valid/id/leng/data/Length")
            .then(res => res.json())
            .then(data => setLen(data));

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/upi/module/importing/for/delete/fetch?key=${key}`)
            .then(res => res.json())
            .then(data => setUpi(data))

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/user/module/importing/for/delete/fetch?key=${key}`)
            .then(res => res.json())
            .then(data => setUser(data));

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/valid/id/leng/data/Length/account/tot?key=${key}`)
            .then(res => res.json())
            .then(data => setLen1(data))

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/questionnns/datata/jdsjkds/fdsfdsnbc/paid/module?key=${key}`)
            .then(res => res.json())
            .then(data => setTot(data));

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/valid/id/leng/data/Length/child/new?key=${key}`)
            .then(res => res.json())
            .then(data => setLen2(data));

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/questionnns/datata/jdsjkds/fdsfdsnbc/paid/module/new/child?key=${key}`)
            .then(res => res.json())
            .then(data => setAlpaid(data));

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/questionnns/datata/jdsjkds/fdsfdsnbc/paid/module/new/child/all?key=${key}`)
            .then(res => res.json())
            .then(data => setAllpl(data))

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/valid/id/leng/data/Length/child/new/all?key=${key}`)
            .then(res => res.json())
            .then(data => setAlllen4(data));

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/valid/id/leng/data/Length/child/new/all/live?key=${key}`)
            .then(res => res.json())
            .then(data => setLive(data));

            const Key1 = "sjhdhg7dshkudfshg"
            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/q/amount/data/all?key=${Key1}`)
            .then(res => res.json())
            .then(data => setAnmt(data));

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/user/module/importing/for/delete/fetch/verify/data?key=${key}`)
            .then(res => res.json())
            .then(data =>setVerifydat(data))

            fetch(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/valid/id/leng/data/Length/child/new/all/verify/len?key=${key}`)
            .then(res => res.json())
            .then(data => setVerifyLen(data))
        }

    },[])

    const [verifyLen , setVerifyLen] = useState([]);
    const [Amount, setAmount] = useState([]);
    const [code, setCode] = useState([]);
    const [verifydat, setVerifydat]= useState([]);

    const Amontpost = (e) =>{
        e.preventDefault();
        axios.post("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/amount/data/post",{Amount, code})
        .then(res =>{
            if(res.data.Status === "OK"){
                alert("Amount Added")
                window.location.reload();
            }
            else{
                alert("Not Updated / Added")
            }
        })
    }

    const Amntup = (e) =>{
        setAmount(e.target.value);
    }
    const Codeup = (e) =>{
        setCode(e.target.value)
    }

  return (
    <div>
      <center>
        {token &&
            <div>
                {email &&
                    <div>
                        <h2>Account Data</h2>
                        <div className='Tab-calcul'>
                            {anmt.map((user,i) =>{
                                const Amont = parseInt(len2.length)*parseInt(user.Amount);
                                return(
                                    <span key={i}>Total Amount Paid : <span>₹ {Amont}.00</span></span>
                                )
                            })}
                        </div>
                        <span className='length-account'>Payments Count : <span>{len.length}</span></span>
                        <div className='roll-01'>
                            {data.map((user,i) =>{
                                const Delt = () =>{
                                    axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/up/account/modeis/i/${user._id}?ip=${user.ip}&name=${user.name}&upi=${user.upi}`)
                                    .then(res =>{
                                        if(res.data.Status === "OK"){
                                            window.location.reload();
                                        }else{
                                            alert("cant Able to delete")
                                        }
                                    })
                                }

                                return(
                                    
                                        <div className='monitor-div-01' key={i}>
                                        <center>
                                            <span className='monitor-span-01'>{user.name}</span><br/>
                                            <span className='monitor-span-02'>{user.upi}</span><br />
                                            <span className='monitor-span-02'>{user.Time}</span><br />
                                            <span className='monitor-span-02'>{user.ip}</span><br />
                                            <button onClick={Delt}>Paid</button>
                                        </center>
                                    </div>
                                )
                            })}
                        </div><br/>


                        <div className='Monitor-imp-01'>
                            <div className='Monitor-imp-01-div-01'>
                                <span>Delete Problems</span>
                                <div className='roll-02'>

                                    {upi.map((user,i) =>{
                                        const Del1 = () =>{
                                            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/${user._id}`)
                                            .then(res =>{
                                                if(res.data.Status === "OK"){
                                                    window.location.reload();
                                                }else{
                                                    alert("Delete Again")
                                                }
                                            })
                                        }
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.ip}</span><br />
                                                <span className='Monit-delete-span' onClick={Del1}>Delete</span>
                                            </div>
                                        )
                                    })}

                                </div>

                            </div>
                            <div className='Monitor-imp-01-div-01'>
                                <span>Delete / Live Players : <span className='live-data-len-class'>{live.length}</span></span>
                                <div className='roll-02'>

                                {user.map((user,i) =>{
                                    const Del2 = () =>{
                                        axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/ada/upi/one/exts/${user._id}`)
                                        .then(res =>{
                                            if(res.data.Status === "OK"){
                                                window.location.reload();
                                            }else{
                                                alert("Delete Again")
                                            }
                                        })
                                    }
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.ip}</span><br />
                                                <span>{user.Time}</span><br/>
                                                <span className='Monit-delete-span' onClick={Del2}>Delete</span>
                                            </div>
                                        )
                                })}
                                    
                                </div>

                            </div>
                            <div className='Monitor-imp-01-div-01'>
                                <span>Total Players Won : <span className='Moin-span-may-be-01'>{len1.length}</span></span>
                                <div className='roll-02'>

                                    {tot.map((user,i) =>{
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.ip}</span><br />
                                            </div>
                                        )
                                    })}
                                    
                                </div>

                            </div>

                            <div className='Monitor-imp-01-div-01'>
                                <span>Amount Paid : <span className='Moin-span-may-be-01'>{len2.length}</span></span>
                                <div className='roll-02'>

                                    {Alpaid.map((user,i) =>{
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.ip}</span><br />
                                                <span>{user.upi}</span><br/>
                                                <span>{user.name}</span>
                                            </div>
                                        )
                                    })}
                                    
                                </div>

                            </div>

                            <div className='Monitor-imp-01-div-01'>
                                <span>All Players : <span className='Moin-span-may-be-01'>{Alllen4.length}</span></span>
                                <div className='roll-02'>

                                    {ALLpl.map((user,i) =>{
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.ip}</span><br />
                                                <span>{user.Country}</span><br/>
                                                <span>{user.Time}</span>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>

                            <div className='Monitor-imp-01-div-01'>
                                <span>Verify : <span className='Moin-span-may-be-01'>{verifyLen.length}</span></span>
                                <div className='roll-02'>

                                    {verifydat.map((user,i) =>{

                                        const Del4 = () =>{
                                            axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/data/api/dont/know/${user._id}`)
                                            .then(res =>{
                                                if(res.data.Status === "OK"){
                                                    window.location.reload();
                                                }else{
                                                    alert('Try Again')
                                                }
                                            })
                                        }
                                        return(
                                            <div className='roll-sub-01' key={i}>
                                                <span>{user.ip}</span><br />
                                                <span>{user.verify}</span><br/>
                                                <span>{user.Time}</span><br/>
                                                <span className='Monit-delete-span' onClick={Del4} >Delete</span>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>

                    
                            

                        </div>

                        <div className='Monit-fix-amnt-div-01'>
                            <form onSubmit={Amontpost}>
                                <span></span><br />
                                <input type='number' required placeholder='Amount' name='Amount' onChange={Amntup}/><br/>
                                <input type='number' required placeholder='Code' name='code' onChange={Codeup} /><br />
                                <button type='submit'>post</button>
                            </form>
                        </div>

                    </div>
                }
            </div>
        }
      </center>
    </div>
  )
}

export default Monitor
