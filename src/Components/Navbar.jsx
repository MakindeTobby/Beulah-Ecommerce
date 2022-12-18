import { useContext } from "react";
import { ThemeContext } from "../Context";

const Navbar = () => {
    const { cart } = useContext(ThemeContext)

    return (
        <nav className="navbar navbar-expand-md navbar-light t-bg-slate-100 px-5 position-sticky top-0 start-0">
            <a className="navbar-brand" href="/"><img src="/beulah lg.svg" alt="" width={'75%'} /></a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">😋</button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto w-100 d-flex justify-content-center gap-3 align-items-center mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page">Collections <span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                </ul>

                {/* <input className="form-control me-sm-2" type="text" placeholder="Search"/> */}
                <div className="bg-dark rounded t-h-10 t-flex t-items-center px-3 t-justify-between t-w-24">
                    <img src="/icon-cart.svg" alt="" />


                    <span className="text-primary">{cart.length <= 0 ? 0 : cart.length}</span> </div>

            </div>
        </nav>

    );
}

export default Navbar;