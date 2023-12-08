import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/user">
            Анкета
          </Link>
          <Link className="nav-link" to="/categories">
            Участие
          </Link>
          <Link className="nav-link" to="/billing">
            Оплата
          </Link>
        </div>
          <span className="nav-link" onClick={signOutUser}>
          Выйти
        </span>
        
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
