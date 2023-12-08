import { useContext } from "react";
import SignInForm from "../../components/signIn-form/signIn-form.component";
import SignUpForm from "../../components/signUp-form/signUp-form.component";
import Header from "../../components/header/header.component"
import "./auth.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { Navigate, useLocation } from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    const { currentUser } = useContext(UserContext);

    return (
    <div className="auth-wrap">
        <Header />
        <div className="auth-container">
            
            {currentUser ? (
                <Navigate to={`/user`} />
            ) : location.pathname === "/auth/sign-up" ? (
                    <SignUpForm />
            ) : (
                <SignInForm />
            )}
        </div>
    </div>
    );
};
export default Auth;