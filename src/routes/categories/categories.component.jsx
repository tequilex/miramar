import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Category from "../../components/category/category.component";
import "./categories.styles.scss";

const Categories = () => {
const { userInfo } = useContext(UserContext);

// console.log(Object.keys(userInfo.DATA_CATEGORIES));

return (
    <div className="categories-container">
    {Object.keys(userInfo.DATA_CATEGORIES).map((title) => {
        const info = userInfo.DATA_CATEGORIES[title];

        return <Category key={title} info={info} title={title}/>;
    })}
    </div>
);
};
export default Categories;
