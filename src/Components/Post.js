import css from "./Post.css";
import Hz from "./Hz";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Author from "../Components/Author";
import { Content } from "../API";

export default function Post() {
  const { id } = useParams();
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await Content(); // params in url
      console.log(data);
      getPosts(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="postSiren">
        <Link style={{ textDecoration: "none", color: "#000000" }} to="/">
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
          {posts.map((item) =>
            item._id === id ? (
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
                <img className="reactimage" src={item.image} alt={item.alt} />
                <p className="reactpara">{item.description}</p>
                <span className="bottomspan1">{item.category}</span>
                <span className="bottomspan2">{item.date}</span>
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
        <hr className="HrForPost" />
        <div className="PostSide">
          {posts.map((item) =>
            item.id > 403 && item.id < 407 ? (
              <>
                <div className="PostSidediv">
                  <img
                    className="PostSideimage"
                    src={item.image}
                    alt={item.alt}
                  />
                  <h1 className="PostSidehead">{item.title}</h1>
                  <div className="authordiv1">
                    <div className="image"></div>
                    <div className="details">
                      <h3 className="authorname">Dmitry Nozhenko</h3>
                      <p className="datedetails">Jan 28, 2019 · 10 min read</p>
                    </div>
                  </div>
                </div>
                <h3 className="extraauthorname">Dmitry Nozhenko</h3>
              </>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}
