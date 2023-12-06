import { useContext } from "react";
import SignInForm from "../../components/signIn-form/signIn-form.component";
import SignUpForm from "../../components/signUp-form/signUp-form.component";
import "./auth.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { Navigate } from "react-router-dom";

const Auth = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <div className="auth-container">
            {currentUser ? (
                <Navigate to={`/user`} />
            ) : (
                <>
                    <SignUpForm />
                    <SignInForm />
                </>
            )}
        </div>
    );
};
export default Auth;