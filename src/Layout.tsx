import { Link, Outlet } from "react-router-dom"
import logo from "../image/logo.png"
const Layout = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm ">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-light" to="/">
                        <img src={logo} alt="" width="100" className="img-fluid"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signin">
                                    <button className="btn btn-outline-primary">Sign In</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    <button className="btn btn-primary">Sign Up</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div >
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout
