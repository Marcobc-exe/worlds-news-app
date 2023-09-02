import { useSelector } from "react-redux";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useNewsProps } from "../../../hooks/useNewsProps";

export const Title = () => {
  const { country } = useSelector((state) => state.headlines);
  const location = useLocation();
  const navigate = useNavigate();
  const { handlePropCategory } = useNewsProps();
  const PATH_HOME_PAGE = "/";

  const handleNavigatetoHome = () => {
    if(location === PATH_HOME_PAGE) return;
    
    handlePropCategory("")
    return navigate(PATH_HOME_PAGE);
  };

  return (
    <>
      <h2 className="webPageTitle" onClick={handleNavigatetoHome}>News.txt</h2>
      <img 
        className="imgFlag" 
        src={country.flag} 
        alt={country.name}
      />
    </>
  )
}