import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
export default function Account() {
    return (
        <div id="wd-account-screen">
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <AccountNavigation/>
                        </td>
                        <td valign="top">
                            <Routes>
                                <Route path="/" element={<Navigate to="Signin"/>}/>
                                <Route path="Signin" element={<Signin/>}/>
                                <Route path="Profile" element={<Profile/>}/>
                                <Route path="Signup" element={<Signup/>}/>
                            </Routes>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
);}
