import React from "react";
import "./cardLayout.css";
function CardLayout({ type = "singleRow", noOfColumns = 3, children }) {
  let columString = "";
  if (type !== "singleRow") {
    for (let index = 0; index < noOfColumns; index++) {
      columString += `${100 / noOfColumns}%`;
    }
  }

  if (type === "singleRow")
    return (
      <>
        <div className="singleRow">{children}</div>
      </>
    );
  else
    return (
      <>
        <div className="multiRow" style={{ gridTemplateColumns: columString }}>
          {children}
        </div>
      </>
    );
}

export default CardLayout;
