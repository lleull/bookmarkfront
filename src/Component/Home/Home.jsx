import React, { useEffect } from "react";
import "./Home.css";
import pcimg from "../images/illustration-features-tab-1.svg";
import { useState } from "react";
import Datas from "./Datas";

const Home = () => {
  const [data, sedtata] = useState([Datas[0]]);
  const [nextcss, setnextcss] = useState(false)
  const [css, setcss] = useState(false)
  const [next, setnext] = useState(false)
  const firststory = () => {
    sedtata([Datas[0]]);
    setnext(false)
    setnextcss(false)
    setcss(true)
  };
  const nextstory = () => {
    sedtata([Datas[1]]);
    setnext(true)
    setcss(false)
    setnextcss(false)
  };
 
  const nextnextstory = () => {
    sedtata([Datas[2]]);
    setnext(false)
    setcss(false)
    setnextcss(true)
  };
  useEffect(()=> {
    setcss(true)
  },[])
 
  return (
    <div className="home">
      <div className="homepage">
        <div className="hometext">
        <img className="pcimg1" src={pcimg} alt="asd" />
          <h1 className="head"> A Simple BookMark Manager</h1>

          <p className="para">
            A clean and simple interface to organize Your Favourite websites.
            Open a new browser tab and see your sites load instantly . Try it
            For free
          </p>
          <div className="buttons">
            <button className="getchrome"> Get it on Chrome</button>
            <button className="getfirefox"> Get it on FireFox</button>
          </div>
        </div>
        {/* img */}
        <img className="pcimg" src={pcimg} alt="asd" />
      </div>
      <div className="feature">
        <h1 className="title">Features</h1>
        <p className="paras">
          Our aim is to make it quick and easy for You to access Your Favourite
          website. Your bookmark sync b/n Your devices so you can access them on
          the go
        </p>
        <div className="ul">
          <h3 className={css ? "bol" : "h3"} onClick={firststory}>Simple Bookmarking</h3>
          <h3  className={next ? "bol" : "h3"} onClick={nextstory}>Speedy Searching</h3>
          <h3  className={nextcss ? "bol" : "h3"} onClick={nextnextstory}>Easy Sharing</h3>
        </div>
        <div className={next ? "moveline" : "lines" && nextcss? "moveline1" : "lines" && css ? "lines" : "lines"}/>
        <div className="line" />
        {/* click */}
      </div>
      {data.map((storys) => {
        return (
          <div className="click">
            <img className="img" src={storys.photo} alt="sd" />
            <div className="homethird">
              <h1 className="head">{storys.head}</h1>

              <p className="para">{storys.para}</p>
              <div className="buttons">
                <button className="getchrome">More Info</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
