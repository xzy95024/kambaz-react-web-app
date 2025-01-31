import { Link } from "react-router-dom";
export default function Signin() {
    console.log("Signin component rendered");
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input placeholder="username" id="wd-username" className=" form-control mb-2" style = {{width:"250px"}}/>
            <input placeholder="password" id="wd-password" type="password" className="form-control mb-2" style = {{width:"250px"}}/>
            <Link id="wd-signin-btn" to="/Kambaz/Dashboard">
                <button type="submit" className="btn btn-primary mb-2" style = {{width:"250px"}}>Sign In</button>
            </Link>
            <br/>
            <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
        </div>
    );}
