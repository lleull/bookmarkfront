import React from 'react'
import './About.css'
import { useState } from 'react';
import l1 from "./../images/icon-facebook.svg"
import l2 from "./../images/icon-twitter.svg"
import l3 from "./../images/logo-bookmark.svg"
const About = () => {
    const [emaildata, setemaildata] = useState("");
    const [err, seterr] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        if (emaildata === "" && emaildata.split().includes !== "@") {
          seterr(true);
        } else {
          seterr(false);
        }
      };
  return (
    <div className='about'>
         <div className="forms">
         <p className="formp">
        35,000+ Already Joined
        </p>
        <h6>Stay up-to-date with that We`re doing</h6>
       
        <form>
          <input
             
            onChange={(e) => setemaildata(e.target.value)}
            className={err ? "inputs" :"input"}
            type="text"
            placeholder="Enter Your Email Here"
            required
          />
          <button onClick={handlesubmit} className="submit">
         Contact Us
          </button>
        </form>
        {err ? <p className='validate'> Email Validation error!! </p> : ""}
      </div>
      <div className='aboutpage'>
        <div className='abt'>
           
            <div className='unorder'>
            <img className='booklogo' src={l3} alt='as'/>
                <p className="abt">Pricing</p>
                <p className="abt">Contact</p>
                <p className="abt">Features</p>
            </div>
     
        <div className='social'>
            <img src={l1} alt='asd' />
            <img src={l2} alt='asd' />
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default About