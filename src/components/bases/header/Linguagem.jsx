import React from "react";


class Linguagem extends React.Component{
    render(){
        return(
            <div>
                <li className="nav-item dropdown">
                    <a className="nav-link text-white dropdown-toggle d-flex align-items-center" id="languages" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="me-2" src="img/flags/16/GB.png" alt="English"/><span className="d-none d-sm-inline-block">English</span></a>
                    <ul className="dropdown-menu dropdown-menu-end mt-3 shadow-sm" aria-labelledby="languages">
                    <li><a className="dropdown-item" rel="nofollow" href="#"> <img className="me-2" src="img/flags/16/DE.png" alt="Português"/><span className="text-xs text-gray-700">Portugues</span></a></li>
                    <li><a className="dropdown-item" rel="nofollow" href="#"> <img className="me-2" src="img/flags/16/FR.png" alt="English"/><span className="text-xs text-gray-700">Inglês                                         </span></a></li>
                    </ul>
                </li>
            </div>
        )
    }
}
export default Linguagem