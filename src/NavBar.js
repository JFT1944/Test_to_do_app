import React from "react";
import { NavLink } from "react-router-dom";



function NavBar(){




    return(
        <>
        <div className="nav_bar">
            <h1>ToDo's</h1>
            <div className="nav_units">
            <NavLink to="open">Open</NavLink>
            <NavLink to="closed">Closed</NavLink>
            </div>
        </div>

        </>
    )
}


export default NavBar