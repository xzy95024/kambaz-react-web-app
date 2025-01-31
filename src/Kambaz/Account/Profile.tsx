import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>

            <input defaultValue="alice" placeholder="username" id="wd-username" className=" form-control mb-2"
                   style={{width: "250px"}}/>
            <input defaultValue="123" placeholder="password" type="password" id="wd-password"
                   className=" form-control mb-2"
                   style={{width: "250px"}}/>
            <input defaultValue="Alice" placeholder="First Name" id="wd-firstname"
                   className="form-control mb-2"
                   style={{width: "250px"}}/>
            <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname"
                   className="form-control mb-2"
                   style={{width: "250px"}}/>



                <input
                    id="wd-dob"
                    type="date"
                    className="form-control mb-2"
                    placeholder="mm-dd-yyyy"
                    style={{width: "250px"}}
                />

            <input defaultValue="alice@wonderland" placeholder="email" type="email" id="wd-email"
                   className="form-control mb-2"
                   style={{width: "250px"}}/>

            <select id="wd-role" className="form-select mb-2" style={{width: "250px"}}
                    defaultValue="Online"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link to="/Kambaz/Account/Signin" id="wd-signup-link">
                <button type="submit" className="btn btn-primary mb-2" style={{width: "250px"}}>Sign out</button>
            </Link>

        </div>
    );
}
