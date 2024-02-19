import axios from 'axios';
import React, { useState } from 'react'

const Updateques = () => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const [data, setData] = useState({
        question : '',
        optionA : '',
        optionB : '',
        optionC : '',
        optionD : '',
        img : '',
        Qno : '',
        Answer : ""
    })

    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };

    const Post = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch('http://19-load-balencer-1459861075.eu-north-1.elb.amazonaws.com/post/data/question/data/01', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
      
            if (response.ok) {
              alert("Data posted")
              window.location.reload();
            } else {
              alert("Data con't be ssaved")
            }
          } catch (error) {
              console.log(error)
          }
    }


    const To1 = () =>{
        window.location.href='/view'
    }

    const Monit = () =>{
        window.location.href = '/monit'
    }

    const Log = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        window.location.reload();
    }

  return (
    <div>
      <center>
        {email &&
            <div>
                <div>
                    
                </div>
                {token &&
                    <div>
                        <span className='updatepage-span-01'>Admin : {email}</span><br />
                        <button className='spy-btn-01' onClick={To1}>Questions</button><br />
                        <button className='spy-btn-01' onClick={Monit}>Monit Account</button><br />
                        <button className='spy-btn-01' onClick={Log}>Log out</button><br />
                        <div className='updatepage-div-01'>
                            <form onSubmit={Post}>
                                <input type='number' placeholder='Question Number' name='Qno' value={data.Qno} onChange={handleChange} required /><br />
                                <input type='text' placeholder='Type A Question' name='question' value={data.question} onChange={handleChange} required /><br />
                                <input type='url' placeholder='Image URL' name='img' onChange={handleChange} /><br />
                                A<input type='text' placeholder='Option A' name='optionA' value={data.optionA} onChange={handleChange} required /><br />
                                B<input type='text' placeholder='Option B' name='optionB' value={data.optionB} onChange={handleChange} required /><br />
                                C<input type='text' placeholder='Option C' name='optionC' value={data.optionC} onChange={handleChange} required /><br />
                                D<input type='text' placeholder='Option D' name='optionD' value={data.optionD} onChange={handleChange} required /><br />
                                <input type='text' placeholder='Answer A B C D' name='Answer' value={data.Answer} onChange={handleChange} required /><br/>
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

export default Updateques
