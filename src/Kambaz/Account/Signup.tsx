import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input placeholder="username" className="wd-username form-control mb-2" style={{width: "250px"}}/>
            <input placeholder="password" type="password" className="wd-password form-control mb-2"
                   style={{width: "250px"}}/>
            <input placeholder="verify password" type="password" className="wd-password-verify form-control mb-2"
                   style={{width: "250px"}}/>
            <Link id="wd-signin-btn" to="/Kambaz/Account/Profile">
                <button type="submit" className="btn btn-primary mb-2" style={{width: "250px"}}>Sign up</button>
            </Link>
            <br/>
            <Link to="/Kambaz/Account/Signin" id="wd-signup-link">
                <button type="submit" className="btn btn-primary mb-2" style={{width: "250px"}}>Sign in</button>
            </Link>
        </div>
    );
}
