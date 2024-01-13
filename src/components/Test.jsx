import React, { useRef } from "react";

const Test = () => {
  const numRef = useRef(0);

const handleAddBtn = () => {
     numRef.current = numRef.current + 1
    console.log(numRef.current)
}
  return (
    <div>
      <h1>Num : {numRef.current}</h1>
      <button onClick={handleAddBtn}>ADD</button>
    </div>
  );
};

export default Test;
