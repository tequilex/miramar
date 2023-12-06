import { useState, useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { updateUserCategoryDoc } from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";


const Checkbox = ({ inf, index }) => {
  const { userInfo, currentUser } = useContext(UserContext);
  const [checkbox, setCheckBox] = useState(inf);

  const handleChange = (event) => {
    const { checked } = event.target;

    setCheckBox({...inf, isChecked: checked });
    

    // console.log({...inf, isChecked: checked });

  };


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await updateUserCategoryDoc(currentUser)
      alert('успешно обновлено')
    } catch (error) {
      console.log('ошибка', error);
    }
  }
  console.log(checkbox);
  return (
    <form onSubmit={handleSubmit}>
      <label key={index} className="category">
        <input
          name={inf.name}
          type="checkbox"
          checked={checkbox.isChecked}
          onChange={handleChange}
        />
        {inf.name}
      </label>
      <Button type='submit'>Сохранить</Button>
    </form>
  );
};
export default Checkbox;
