import React from "react";
import Popup from "reactjs-popup";

const PopComponent = () => {
  return (
    <Popup trigger={<button> Trigger</button>}>
      <div>Popup content here !!</div>
    </Popup>
  );
};

export default PopComponent;
