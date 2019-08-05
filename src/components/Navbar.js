import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="navbar-nav left">
                    <li class="nav-item active">
                    <Link to="/" exact class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                    <Link to="/about" class="nav-link" >About</Link>
                    </li>   
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar
