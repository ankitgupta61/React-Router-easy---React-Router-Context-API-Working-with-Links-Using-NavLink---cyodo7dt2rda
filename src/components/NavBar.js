import React from 'react';
import {Link} from 'react-router-dom'
import {Index} from "../Pages/Index"
import { Home } from "../Pages/Home"

export const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li><Link class="index-link" to="/" element={<Index></Index>}>Index</Link></li>
                <li><Link class="home-link" to="/home" element={<Home></Home>}>Home</Link></li>
            </ul>
        </nav>
    )
}