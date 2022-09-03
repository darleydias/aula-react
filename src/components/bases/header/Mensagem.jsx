import React from "react";

class Mensagem extends React.Component{
    render(){
        return(
            <li className="nav-item dropdown"> <a className="nav-link text-white" id="messages" rel="nofollow" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <svg className="svg-icon svg-icon-xs svg-icon-heavy">
              <use href="#envelope-1"> </use>
            </svg><span className="badge bg-orange badge-corner fw-normal">10</span></a>
          <ul className="dropdown-menu dropdown-menu-end mt-3 shadow-sm" aria-labelledby="messages">
            <li><a className="dropdown-item d-flex py-3" href="#"> <img className="img-fluid rounded-circle" src="img/avatar-1.jpg" alt="..." width="45"/>
                <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">Carlos Antonio</span><small className="small text-gray-600"> Envie sua mensagem</small></div></a></li>
            <li><a className="dropdown-item d-flex py-3" href="#"> <img className="img-fluid rounded-circle" src="img/avatar-2.jpg" alt="..." width="45"/>
                <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">Manuel Dantas</span><small className="small text-gray-600">Envie sua mensagem</small></div></a></li>
            <li><a className="dropdown-item d-flex py-3" href="#"> <img className="img-fluid rounded-circle" src="img/avatar-3.jpg" alt="..." width="45"/>
                <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">Carlos antonio</span><small className="small text-gray-600">Envie sua mensagem</small></div></a></li>
            <li><a className="dropdown-item text-center" href="#"> <strong className="text-xs text-gray-600">Todas mensagens  </strong></a></li>
          </ul>
        </li>

        )
    }
}
export default Mensagem