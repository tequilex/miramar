import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser);
    if (currentUser === null) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
