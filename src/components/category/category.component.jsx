import { useState, useEffect } from "react";
import Checkbox from "../checkbox/checkbox.component";
import "./category.styles.scss";

const Category = ({ info, index }) => {

  return (
    <div className="category-block">
      <h3 className="category-title">{info.title}</h3>
      {info.items.map((inf, index) => {
        console.log(inf);
        return (
          <Checkbox inf={inf} index={index}/>
        );
      })}
    </div>
  );
};
export default Category;
