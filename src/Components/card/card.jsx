import React from "react";
import "./card.css";
const Card = ({
  id = 0,
  title = "",
  description = "",
  image = "",
  price = "",
  category = "",
  count = "",
  rate = "",
  style = {},
  classname = "",
  onClick,
}) => {
  return (
    <div className={classname} style={style} onClick={() => onClick()}>
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
        <div className="rate">
          <span>{rate}</span>
        </div>
      </div>
      <p className="price">{`$${price}`}</p>
      <p className="title">{title}</p>
      <div className="info">
        <p className="des">{description}</p>
        <p className="count">{count}</p>
      </div>
    </div>
  );
};

export default Card;
