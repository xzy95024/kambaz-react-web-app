// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Labs from "./Labs";
import Kambaz from "./Kambaz";
import {HashRouter,Route,Routes,Navigate} from "react-router-dom";


export default function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Kambaz" />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kambaz/*" element={<Kambaz />} />
                </Routes>
            </div>
        </HashRouter>
    );}


