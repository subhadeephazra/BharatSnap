import React from "react";
import "../App.css"

const Display = ({searchresultIn}) => {
  return (
    <div className="imagebox">
      {searchresultIn.map((result, index) => (
        <div key={index}>
          <img src={result.urls.small} alt="" />
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;

