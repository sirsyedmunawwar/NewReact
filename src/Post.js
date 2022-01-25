import css from "./Post.css";
import Hz from "./Hz";
import ArHforReact from "./ArHforReact";
import { ContextAPI } from "./ContextAPI";
import { useContext } from "react";
import {Link,useParams} from 'react-router-dom'



export default function Post() {
  const [rows] = useContext(ContextAPI);
  const {id} = useParams();

  return (
    <>
      <div className="smalltitle">
        <h3 className="smallthe">The</h3>
        <h1 className="smallsiren">Siren</h1>
        <button className="button">Get Stated</button>
      </div>
      <div className="reacthead">
        <div className="fixed">
          <div className="share">
            <div className="clapimage"></div>
            <div className="clapcount">9.3K claps</div>
          </div>
          <div className="share">
            <div className="shareimage"></div>
            <div className="clapcount">Share this article</div>
          </div>
        </div>
        <div className="notfixed">
        {rows.map((item)=>(
            item.id===id?(
                <>
                 <h1 className="fiveways">{item.title}</h1>
          <div className="authordiv">
            <div className="image"></div>
            <div className="details">
              <h3 className="authorname">Dmitry Nozhenko</h3>
              <p className="datedetails">Jan 28, 2019 · 10 min read</p>
            </div>
          </div>
          <div className="socialicon">
            <i className="fa fa-facebook-square icons"> </i>

            <i className="fa fa-twitter-square icons "> </i>
            <i className="fa fa-instagram icons"> </i>
            <i className="fa fa-youtube-square icons"> </i>
          </div>
          <img className="reactimage" src= {item.image}/>
          <p className="reactpara">{item.description}</p>
         <div>{item.category}</div>
         <div>{item.date}</div>
                </>
            ):('')
        ))}
         
          <div className="buttonsdiv">
            <button className="threebuttons">React</button>
            <button className="threebuttons">Javascript</button>
            <button className="threebuttons">Animation</button>
          </div>
          <div className="share">
            <div className="clapimage"></div>
            <div className="clapcount">9.3K claps</div>
          </div>
          <Hz />
          <div className='authordiv'>
            <div className='image'>
            </div>
            <div className='details'>
                <h3 className='authorname'>Dmitry Nozhenko</h3>
                <p className='datedetails'>Jan 28, 2019 · 10 min read</p>
            </div>
        </div>
          <Hz />
        </div>
      </div>
      <div className="reactbottom">
        <h3 className="reactmore">More From The Siren</h3>
        <Hz />
        {/* <ArHforReact /> */}
      </div>
    </>
  );
}
