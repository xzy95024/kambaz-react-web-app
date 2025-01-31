import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="d-flex flex-column align-items-start list-group rounded-0 position-fixed">

            <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link"
                  className="fw-bold text-black border-start border-3 border-dark ps-2 text-decoration-none">
                Signin </Link>

            <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link"
                  className="fw-bold text-danger ps-2 mt-2 text-decoration-none">
                Signup </Link>

            <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link"
                  className="fw-bold text-danger ps-2 mt-2 text-decoration-none">
                Profile </Link>
        </div>
    );}
