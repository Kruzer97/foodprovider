import React from "react";
import "./Background.css";

import BackgroundImage from "../images/background.jpg";

const Background = props => {
  return (
    <div class="parallax__layer parallax__layer--back">
      <img src={BackgroundImage} style={{ maxWidth: "100%", maxHeight: "100%" }} />
    </div>
  );
};

export default Background;
