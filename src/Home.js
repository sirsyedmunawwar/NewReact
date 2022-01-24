import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextAPI } from "./ContextAPI";
import css from './home.css'
import Hz from'./Hz'

const Home = () => {
  // const [loadMore, setLoadMore] = useState(false);
  // const [loadBtntext, setLoadBtntext] = useState("Load More");

  // const handleLoadMore = () =>{
  //     setLoadMore(!loadMore);
  //     console.log(loadMore);
  //     if(!loadMore){
  //         setLoadBtntext("Load Less");
  //     }
  //     else{
  //         setLoadBtntext("Load More");
  //     }
  // }

  const [rows] = useContext(ContextAPI);

  return (
    <>


      {/* <Header /> */}
      <div className="homeimages">
        <div className="verticalGallery">
          <h1 className="titleofvg">Title of Vertical Gallery</h1>
          <p className="dateofvg"> Travel / August 21 2017</p>
        </div>
        <div className="righttop">
          <h1 className="titlert">The Sound cloud You loved is doomed</h1>
          <p className="datert"> Travel / August 21 2017</p>
        </div>
        <div className="rightbottom">
          <h1 className="titlert">The Sound cloud You loved is doomed</h1>
          <p className="datert"> Travel / August 21 2017</p>
        </div>
      </div>
      <div>
        <h1 className="latest">The Latest</h1>
        <hr className="latesthr" />
      </div>
      <div className="leftSide">
        {rows.map((item) =>(
            (item.id)<4?(
                <div className="leftsidediv">
                <img className="leftsideimage" src={item.image} />
                <h1 className="leftSidehead">
                    {item.title}
                </h1>
                <p className="leftSidedetails">
                    {item.description}
                </p>
                <span className="leftSidetype">
                    {item.category}
                </span>
                <span className="leftSidedate">
                    {item.date}
                </span>
            </div>
            ):('')
        )
        
           )}
</div>

      
      <div>
        <h1 className="latest">Latest Article</h1>
        <hr className="latesthr" />
      </div>
      <div className="top">
        <div className="left">
        {rows.map((item) =>(
           (item.id)>3 && (item.id)<8?(
               <>
            <Hz/>
            <div className="leftdiv" >
                <img className="imagediv" src={item.image} />
                <div className="contentdiv">
                    <h1 className='bottomheading'>{item.title}</h1>
                    <p className='bottomdesc'>{item.description}</p>
                    <span className='bottomspan1'>{item.category}</span>
                    <span className='bottomspan2' >{item.date}</span>
                </div>
            </div>
            </>
           ):("")
        )
               
     
               
                   



                
            )}

          <div className="arrowdiv">
            <div className="downarrow"></div>
            <div className="arrow">LOAD MORE</div>
          </div>

          <div className="verticalGallerybottom">
            <h1 className="vgbtitle">Title of Vertical Gallery</h1>
            <p className="vgbdate"> Travel / August 21 2017</p>
          </div>
        </div>
        <div className="right">
          <div className="advdiv">
            <div className="adv">Advertistement</div>
          </div>
          <div>
            <h1 className="latest">Top Posts</h1>
            <hr className="topposthr" />
          </div>
          <div className="rightdiv" >
 
            {rows.map((item) =>(
                (item.id)>8 && (item.id)<12?(
                    <>
                    
                    <div className='rightdivmain'>
                        
                    <img className="rightdivimage" src={item.image} />
                    <div className="Rightcontentdiv">
                        <h1 className='rightheading'>{item.title}</h1>

                        <span className='rightspan1'>{item.category}</span>
                        <span className='rightspan2' >{item.date}</span>
                    </div>
                </div>
                <hr className="minushr"/> 
                </>
                ):('')
            )
                
            )}
        </div>
        </div>
      </div>
      <div>
        <h1 className="latest">Latest Stories</h1>
        <hr className="latesthr" />
      </div>
      <Hz />
      <div className='bottomarticle'>
                {rows.map((any) =>
                    <>


                        <div className="Bottomcontentdiv">
                            <h1 className='bottomheading'>{any.heading}</h1>
                            <p className='bottomdesc'>{any.description}</p>
                            <span className='bottomspan1'>{any.type1}</span>
                            <span className='bottomspan2' >{any.date1}</span>
                        </div>
                    </>
                )}
            </div>
      <Hz />
      <div className="arrowdiv">
        <div className="arrow">VIEW MORE</div>
        <div className="rightarrow"></div>
      </div>

      <div />
    </>
  );
};

export default Home;
