import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../../redux/action/videos.action";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const spanClickHandler = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
  };

  return (
    <div className="categoriesbar">
      {keywords.map((keyword, ind) => (
        <span
          key={ind}
          onClick={() => {
            spanClickHandler(keyword);
          }}
          className={activeElement === keyword ? "active" : ""}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
