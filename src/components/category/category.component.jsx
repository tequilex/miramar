import { useState, useEffect } from "react";
import "./category.styles.scss";

const Category = ({ info, title }) => {
  const [checkBox, setCheckBox] = useState(info.items[title].checked);

  console.log(info.items);

  // console.log(checkBox);
  return (
    <div className="category-block">
      <h3 className="category-title">{info.title}</h3>
      {info.items.map((inf, index) => {
        console.log(inf.checked);
        return (
          <label key={index} className="category">
            <input type="checkbox" />
            {inf.name}
          </label>
        );
      })}
    </div>
  );
};
export default Category;
