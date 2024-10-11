import "./ProductCard.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; 
import { useState } from "react";

const ProductCard = ({ title, image }) => {
  const [isLiked, setIsLiked] = useState(false); 

  const toggleLike = () => {
    setIsLiked((prev) => !prev); 
  };

  return (
    <>
      <div className="cardContainer">
        <img src={image} alt="bag" className="product-image" />
        <div className="product-details">
          <div className="nameDescription">
            <h3 className="product-name">{title}</h3>
            <div>
              <p className="product-description">
                Sign in or Create account to see pricing
              </p>
              <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon 
                  icon={isLiked ? solidHeart : regularHeart} 
                  color={isLiked ? "red" : "black"} 
                  size="xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
