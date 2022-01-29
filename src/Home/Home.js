import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextAPI } from "../Components/ContextAPI";
import Header from "../Header/Header";
import css from "../Home/home.css";
import Hz from "../Components/Hz";

const Home = () => {
  const [loadBtntext, setLoadBtntext] = useState("LOAD MORE");
  const [itemsToShow, setItemsToShow] = useState(8);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 2);
    if (itemsToShow > 9) {
      setLoadBtntext("LOAD LESS");
    }
    if (itemsToShow > 11) {
      setItemsToShow(itemsToShow - 2);
      setLoadBtntext("LOAD MORE");
    }
  };

  const [rows] = useContext(ContextAPI);

  return (
    <>
      <Header />

      <div className="homeimages">
        {rows.map((item) =>
          item.id === "1000" ? (
            <Link className="verticalGallery link" to={`/post/${item.id}`}>
              <div className="verticalGallery">
               
                <h1 className="titleofvg">RED LEAVES</h1>
                <p className="dateofvg"> NATURE / JAN 10 2020</p>
              </div>
            </Link>
          ) : (
            ""
          )
        )}
        {rows.map((item) =>
          item.id === "1001" ? (
            <Link className="righttop link" to={`/post/${item.id}`}>
              <div className="righttop">
                <h1 className="titlert">The Sound cloud You loved is doomed</h1>
                <p className="datert"> Travel / August 21 2017</p>
              </div>
            </Link>
          ) : (
            ""
          )
        )}
        {rows.map((item) =>
          item.id === "1001" ? (
            <Link className="rightbottom link" to={`/post/${item.id}`}>
              <div className="rightbottom">
                <h1 className="titlert">The Sound cloud You loved is doomed</h1>
                <p className="datert"> Travel / August 21 2017</p>
              </div>
            </Link>
          ) : (
            ""
          )
        )}
      </div>
      <div>
        <h1 className="latest">The Latest</h1>
        <hr className="latesthr" />
      </div>
      <div className="leftSide">
        {rows.map((item) =>
          item.id < 4 ? (
            <Link className="link" to={`/post/${item.id}`}>
              <div className="leftsidediv">
                <img className="leftsideimage" src={item.image} alt={item.alt} />
                <h1 className="leftSidehead">{item.title}</h1>
                <p className="leftSidedetails">{item.description}</p>
                <span className="leftSidetype">{item.category}</span>
                <span className="leftSidedate">{item.date}</span>
              </div>
            </Link>
          ) : (
            ""
          )
        )}
      </div>

      <div>
        <h1 className="latest">Latest Article</h1>
        <hr className="latesthr" />
      </div>
      <div className="top">
        <div className="left">
          {rows.map((item) =>
            item.id > 3 && item.id < itemsToShow && item.id <= 11 ? (
              <>
                <Hz />
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="leftdiv">
                    <img className="imagediv" src={item.image} alt={item.alt} />
                    <div className="contentdiv">
                      <h1 className="bottomheading">{item.title}</h1>
                      <p className="bottomdescdiv">{item.description}</p>
                      <span className="bottomspan1">{item.category}</span>
                      <span className="bottomspan2">{item.date}</span>
                    </div>
                  </div>
                </Link>
              </>
            ) : (
              ""
            )
          )}

          <button onClick={handleLoadMore} className="arrowdiv">
            <div className="arrow">{loadBtntext}</div>
          </button>
          {rows.map((item) =>
          item.id === "19" ? (
            <Link className=" link" to={`/post/${item.id}`}>
               <div className="verticalGallerybottom">
            <h1 className="vgbtitle">Importance Of Trees</h1>
            <p className="vgbdate"> NATURE / JAN 10 2020</p>
          </div>
            </Link>
          ) : (
            ""
          )
        )}
         
        </div>
        <div className="right">
          <div className="advdiv">
            <div className="adv">Advertistement</div>
          </div>
          <div>
            <h1 className="TopPost">Top Posts</h1>
            <hr className="topposthr" />
          </div>
          <div className="rightdivHome">
            {rows.map((item) =>
              item.id > 11 && item.id < 16 ? (
                <> 
                  {" "}
                  <Link className="rightdivlink link" to={`/post/${item.id}`}>
                    <div className="rightdivmain">
                      <img className="rightdivimage" src={item.image} alt={item.alt} />
                      <div className="Rightcontentdiv">
                        <h1 className="rightheading">{item.title}</h1>

                        <span className="rightspan1">{item.category}</span>
                        <span className="rightspan2">{item.date}</span>
                      </div>
                    </div>
                  </Link>
                  <hr className="minushr" />
                </>
              ) : (
                ""
              )
            )}
          </div>
         
        </div>
      </div>
      <div>
        <h1 className="latest">Latest Stories</h1>
        <hr className="latesthr" />
      </div>
      <hr className="lastHr"/>
      <div className="bottomarticle">
        {rows.map((item) =>
          item.id > 15 && item.id < 19 ? (
            <>
              <Link className="link HrHz" to={`/post/${item.id}`}>
                <div className="Bottomcontentdiv">
                  <h1 className="bottomheading">{item.title}</h1>
                  <p className="bottomdesc">{item.description}</p>
                  <span className="bottomspan1">{item.category}</span>
                  <span className="bottomspan2">{item.date}</span>
                </div>
              </Link>
            </>
          ) : (
            ""
          )
        )}
      </div>
     
      

      <div />
    </>
  );
};

export default Home;
