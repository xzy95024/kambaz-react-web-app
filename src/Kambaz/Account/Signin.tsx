import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";
import {Button, FormControl} from "react-bootstrap";


export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user =  await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kambaz/Dashboard");
    };


    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <FormControl defaultValue={credentials.username}
                         onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                         className="mb-2" placeholder="username" id="wd-username"
                         style={{ width: "300px", height: "40px" }}/>
            <FormControl defaultValue={credentials.password}
                         onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                         className="mb-2" placeholder="password" type="password" id="wd-password"
                         style={{ width: "300px", height: "40px" }}/>
            <Button onClick={signin} id="wd-signin-btn" style={{ width: "300px", height: "40px" }}  > Sign in </Button>
            <br />
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
        </div>
    );}
