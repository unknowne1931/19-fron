import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';

const Qustview = () => {
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")
    const [data, setData] = useState([]);

    useEffect(() =>{
        if(token !== null){
            fetch("http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/questionnns/datata/get")
            .then(res => res.json())
            .then(data => setData(data))
        }
    },[])

    
  return (
    <div>
        {email &&
            <div>
                {token &&
                
                <div>
                    <center>
                        <h2>View Questions</h2>
                        <div>
                            {data.map((user,i) =>{
                                const Dele = async () =>{
                                    await axios.delete(`http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/delete/api/data/question/ss/${user._id}`)
                                    .then(res =>{
                                        if(res.data.Status === "OK"){
                                            window.location.reload();
                                        }else{
                                            alert("Delete it Again")
                                        }
                                    })
                                }
                                
                                return(
                                    <div className='view-div-01' key={i}>
                                        <span>{user.Qno}</span><br/>
                                        <span className='view-span-01'>{user.question}</span><br />
                                        {user.img !== ""&&
                                        
                                        <div className='view-img-cnt-01'>
                                            <img src={user.img} />
                                        </div>
                                        }
                                        <button className='view-btn-01'>{user.optionA}</button><button className='view-btn-01'>{user.optionB}</button><br />
                                        <button className='view-btn-01'>{user.optionC}</button><button className='view-btn-01'>{user.optionD}</button><br/>
                                        <button className='view-qno-delet-01' onClick={Dele}>Dlete Qno {user.Qno}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </center>
                </div>
                }
            </div>
        }
        
    </div>
  )
}

export default Qustview;
