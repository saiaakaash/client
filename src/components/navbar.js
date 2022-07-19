import React from "react"

const navbar = ()=>{
    return(
    
        <nav>
            <div className="nav-wrapper white ">
                <a href="#" className="brand-logo left">Logo</a>
                <ul id="nav-mobile" className="right ">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}
 
export default navbar