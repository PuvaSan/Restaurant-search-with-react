import "./CafeList.css";
import Cafe from "../Cafe/Cafe";
import React from "react";

function CafeList({cafes}) {
  console.log(cafes);
  return (
    <div className="cafe-list">
      { cafes.map( cafe => <Cafe cafe={cafe} key={cafe.title} />)}
    </div>
  );
}

export default CafeList;
