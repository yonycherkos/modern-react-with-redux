import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit he beach!",
    iconName: "sun"
  },
  winter: {
    text: "burr, it's chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (2 < month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
