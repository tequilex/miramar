import { useState } from "react";

const Checkbox = ({inf, index}) => {

  const [checkbox, setCheckBox] = useState(inf)


  const handleChange = (event) => {
    const { checked, name } = event.target;
  
    console.log(checkbox);
    setCheckBox(checkbox.isChecked )
    console.log(checkbox);
    // console.log(checkbox);

  };

  console.log(checkbox);
  return (
    <label key={index} className="category">
            <input
              name={inf.name}
              type="checkbox"
              checked={inf.isChecked}
              onChange={handleChange}
            />
            {inf.name}
          </label>
  )
}
export default Checkbox