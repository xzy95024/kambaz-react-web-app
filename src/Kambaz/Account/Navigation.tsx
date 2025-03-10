import { Link,useNavigate,useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import {useEffect} from "react";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const location = useLocation(); // Get current URL
    const navigate = useNavigate(); // Function to redirect users
    useEffect(() => {
        if (!currentUser && location.pathname === "/Kambaz/Account/Profile") {
            navigate("/Kambaz/Account/Signin");
        }
    }, [currentUser, location.pathname, navigate]);
    return (
        <div id="wd-account-navigation"
             className="d-flex flex-column align-items-start list-group rounded-0 position-fixed">
            {!currentUser && (
                <>
                    <Link
                        to="/Kambaz/Account/Signin"
                        id="wd-account-signin-link"
                        className={`fw-bold ps-2 mt-2 text-decoration-none ${
                            location.pathname === "/Kambaz/Account/Signin"
                                ? "text-black border-start border-3 border-dark"
                                : "text-danger"
                        }`}
                    >
                        Signin
                    </Link>

                    <Link
                        to="/Kambaz/Account/Signup"
                        id="wd-account-signup-link"
                        className={`fw-bold ps-2 mt-2 text-decoration-none ${
                            location.pathname === "/Kambaz/Account/Signup"
                                ? "text-black border-start border-3 border-dark"
                                : "text-danger"
                        }`}
                    >
                        Signup
                    </Link>
                </>
            )}

            {currentUser && (
                <Link
                    to="/Kambaz/Account/Profile"
                    id="wd-account-profile-link"
                    className={`fw-bold ps-2 mt-2 text-decoration-none ${
                        location.pathname === "/Kambaz/Account/Profile"
                            ? "text-black border-start border-3 border-dark"
                            : "text-danger"
                    }`}
                >
                    Profile
                </Link>
            )}
        </div>
    );
}
