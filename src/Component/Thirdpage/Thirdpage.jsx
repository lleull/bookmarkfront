import React from "react";
import "./third.css";

import chrome from "./../images/logo-chrome.svg";
import firefox from "./../images/logo-firefox.svg";
import opera from "./../images/logo-opera.svg";
import arrow from "./../images/icon-arrow.svg";
import { useState } from "react";

const Thirdpage = () => {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);
  const f1 = () => {
    setfirst(true);
    setsecond(false);
    setthird(false);
    setfourth(false);
    if(first){
      setfirst(false)
    }
  };
  const f2 = () => {
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfourth(false);
    if(second){
      setsecond(false)
    }
  };
  const f3 = () => {
    setfirst(false);
    setsecond(false);
    setthird(true);
    setfourth(false);
    if(third){
      setthird(false)
    }
  };
  const f4 = () => {
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfourth(true);
    if(fourth){
      setfourth(false)
    }
  };
  return (
    <div className="section">
      <h5>
        Downlaod The Extension{" "}
        <p className="para">
          We`ve got more browser in the pipeline. Please do let us know if
          you`ve got a favourite You`d like us to prioritize.{" "}
        </p>
      </h5>
      <div className="cards">
        <div className="card">
          <img className="cardimg" src={chrome} alt="dsa" />
          <h2 className="addtext">Add To Chrome</h2>
          <p className="ptext">Minimum Version 62</p>
          <div className="dash"></div>
          <button className="cardbtn">Add & install Extension</button>
        </div>
        <div className="card">
          <img className="cardimg" src={firefox} alt="dsa" />
          <h2 className="addtext">Add To Chrome</h2>
          <p className="ptext ">Minimum Version 62</p>
          <div className="dash"></div>
          <button className="cardbtn">Add & install Extension</button>
        </div>
        <div className="card">
          <img className="cardimg" src={opera} alt="dsa" />
          <h2 className="addtext">Add To Chrome</h2>
          <p className="ptext">Minimum Version 62</p>
          <div className="dash"></div>
          <button className="cardbtn">Add & install Extension</button>
        </div>
      </div>
      <div className="freq">
        <h5 className="free">
          Frequently Asked Questions
          <p className="fpara">
            Here are some of our FAQs. if you have any other Questions you`d
            like answered please feel free to email us
          </p>
        </h5>
        <div className="fqt">
          <h1 className="question">
            What is Bookmark? <img className={first ? "imgs" : "img1"} onClick={f1} src={arrow} alt="asd" />
          </h1>
          {first ? (
            <p className="tog">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolor culpa eius modi sapiente non necessitatibus vero
              perspiciatis eaque a nobis, mollitia optio voluptatum maiores
              sunt, distinctio at, cumque eos.
            </p>
          ) : (
            ""
          )}
          <h1 className="question">
            How can i request a new Browser? <img className={second ? "imgs" : "img1"} onClick={f2}  src={arrow} alt="asd" />
          </h1>
          {second ? <p className="tog">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur dolor culpa eius modi sapiente non necessitatibus vero
            perspiciatis eaque a nobis, mollitia optio voluptatum maiores sunt,
            distinctio at, cumque eos.
          </p>:""} 
          <h1 className="question">
            Is there a mobile app? <img className={third ? "imgs" : "img1"} onClick={f3}  src={arrow} alt="asd" />
          </h1>
          {third ? <p className="tog">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur dolor culpa eius modi sapiente non necessitatibus vero
            perspiciatis eaque a nobis, mollitia optio voluptatum maiores sunt,
            distinctio at, cumque eos.
          </p>:""} 
          <h1 className="question">
            What about other Chrominum browsers <img className={fourth ? "imgs" : "img1"} onClick={f4}  src={arrow} alt="asd" />
          </h1>
        {fourth ? <p className="tog">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur dolor culpa eius modi sapiente non necessitatibus vero
            perspiciatis eaque a nobis, mollitia optio voluptatum maiores sunt,
            distinctio at, cumque eos.
          </p>:""}  
        </div>
        <button className="getchrome">More Info</button>
      </div>
    </div>
  );
};

export default Thirdpage;
