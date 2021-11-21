import React, { useState } from "react";
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

  const spanClickHandler = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriesbar">
      {keywords.map((keyword, ind) => (
        <span
          kay={ind}
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
