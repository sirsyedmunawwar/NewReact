import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Content } from "../API";

function Technology(props) {
  const [loadBtntext, setLoadBtntext] = useState("Load More");
  const [itemsToShow, setItemsToShow] = useState(208);
  const [posts, getPosts] = useState([]);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 2);
    if (itemsToShow > 209) {
      setLoadBtntext("load less");
    }
    if (itemsToShow > 211) {
      setItemsToShow(itemsToShow - 2);
      setLoadBtntext("load More");
    }
  };
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
      <Header />
      <div className="top">
        <div className="left">
          <div>
            <h1 className="bollywoodtag">Technology</h1>
            <hr className="bollywoodhr" />
          </div>

          {posts.map((item) =>
            item.id >= 201 && item.id < itemsToShow && item.id <= 211 ? (
              <>
                <hr className="inside" />
                <Link className="link" to={`/${item._id}`}>
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
        </div>
        <div className="right">
          <div>
            <h1 className="TopPost">Top Posts</h1>
            <hr className="topposthr" />
          </div>
          <div className="rightdiv">
            {posts.map((item) =>
              item.id > 211 && item.id < 216 ? (
                <>
                  {" "}
                  <Link className="rightdivlink link" to={`/${item._id}`}>
                    <div className="rightdivmain">
                      <img
                        className="rightdivimage"
                        src={item.image}
                        alt={item.alt}
                      />
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
          <div className="bollywoodadv">
            <div className="adv">Advertistement</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Technology;
