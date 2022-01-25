import cssstyles from "./bollywood.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { ContextAPI } from "../Components/ContextAPI";
import { useContext ,useState} from "react";
import Hz from "../Components/Hz";

function Bollywood(props) {
    const [loadBtntext, setLoadBtntext] = useState("Load More");
  const [itemsToShow, setItemsToShow] = useState(8);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 2);
    if (itemsToShow > 9) {
      setLoadBtntext("load less");
    }
    if (itemsToShow > 11) {
      setItemsToShow(itemsToShow - 2);
      setLoadBtntext("load More");
    }
  };

  const [rows] = useContext(ContextAPI);
  return (
    <>
      <Header />
      <div className="top">
        <div className="left">
          {rows.map((item) =>
            item.id > 3 && item.id < itemsToShow && item.id <= 11 ? (
              <>
                <Hz />
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="leftdiv">
                    <img className="imagediv" src={item.image} />
                    <div className="contentdiv">
                      <h1 className="bottomheading">{item.title}</h1>
                      <p className="bottomdesc">{item.description}</p>
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
            <div className="downarrow"></div>
            <div className="arrow">{loadBtntext}</div>
          </button>

        
        </div>
        <div className="right">
          <div className="advdiv">
            <div className="adv">Advertistement</div>
          </div>
          <div>
            <h1 className="latest">Top Posts</h1>
            <hr className="topposthr" />
          </div>
          <div className="rightdiv">
            {rows.map((item) =>
              item.id > 8 && item.id < 13 ? (
                <> 
                  {" "}
                  <Link className="rightdivlink link" to={`/post/${item.id}`}>
                    <div className="rightdivmain">
                      <img className="rightdivimage" src={item.image} />
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
    </>
  );
}
export default Bollywood;
