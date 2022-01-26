import css from "./Post.css";
import Hz from "./Hz";
import { ContextAPI } from "./ContextAPI";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Author from "../Components/Author";

export default function Post() {
  const [rows] = useContext(ContextAPI);
  const { id } = useParams();

  return (
    <>
    <div className="postSiren">
    <Link style={{"textDecoration":"none","color":"#000000"}} to="/">
    <div className="smalltitle">
        <h3 className="smallthe">The</h3>
        <h1 className="smallsiren">Siren</h1>
        {/* <button className="button">Get Stated</button> */}
      </div>
       </Link>
     
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
          {rows.map((item) =>
            item.id === id ? (
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
                <img className="reactimage" src={item.image} />
                <p className="reactpara">{item.description}</p>
                <div>{item.category}</div>
                <div>{item.date}</div>
              </>
            ) : (
              ""
            )
          )}

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
          <Author />
          <Hz />
        </div>
      </div>
      <div className="reactbottom">
        <h3 className="reactmore">More From The Siren</h3>
        <Hz />
        <div className="leftSide">
          {rows.map((item) => (
            (item.id)>100 && (item.id)<104?(<>
              <div className="leftsidediv">
                <img className="leftsideimage" src={item.image} />
                <h1 className="leftSidehead">{item.title}</h1> <Author />
              </div>
            </>):('')
            
          ))}
        </div>
      </div>
    </>
  );
}
