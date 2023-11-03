import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./logo.png"

export default function Navbar() {
    return ( 
    <nav className="nav">
        <Link to="/" className="site-title">
            <img src={logo} width="150" height="130"/>
        </Link>
        <ul>
            <CustomLink to="/About"><b>About</b></CustomLink>
        </ul>
    </nav>
  )
}


function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}