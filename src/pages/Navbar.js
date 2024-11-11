import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return(
        <nav>
            <h1>Petcare101</h1>
            <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/articles">Articles</Link></li>
                 <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>

    );

    
}
export default Navbar;