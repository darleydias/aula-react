import React from "react";


class Notificacao extends React.Component{
    render(){
        return(
            <li className="nav-item dropdown"> <a className="nav-link text-white" id="notifications" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <svg className="svg-icon svg-icon-xs svg-icon-heavy">
              <use href="#chart-1"> </use>
            </svg><span className="badge bg-red badge-corner fw-normal">12</span></a>
          <ul className="dropdown-menu dropdown-menu-end mt-3 shadow-sm" aria-labelledby="notifications">
            <li><a className="dropdown-item py-3" href="#"> 
                <div className="d-flex">
                  <div className="icon icon-sm bg-blue">
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#envelope-1"> </use>
                    </svg>
                  </div>
                  <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">You have 6 new messages </span><small className="small text-gray-600">4 minutes ago</small></div>
                </div></a></li>
            <li><a className="dropdown-item py-3" href="#"> 
                <div className="d-flex">
                  <div className="icon icon-sm bg-green">
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#chats-1"> </use>
                    </svg>
                  </div>
                  <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">New 2 WhatsApp messages</span><small className="small text-gray-600">4 minutes ago</small></div>
                </div></a></li>
            <li><a className="dropdown-item py-3" href="#"> 
                <div className="d-flex">
                  <div className="icon icon-sm bg-orange">
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#checked-window-1"> </use>
                    </svg>
                  </div>
                  <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">Server Rebooted</span><small className="small text-gray-600">8 minutes ago</small></div>
                </div></a></li>
            <li><a className="dropdown-item py-3" href="#"> 
                <div className="d-flex">
                  <div className="icon icon-sm bg-green">
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#chats-1"> </use>
                    </svg>
                  </div>
                  <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">New 2 WhatsApp messages</span><small className="small text-gray-600">10 minutes ago</small></div>
                </div></a></li>
            <li><a className="dropdown-item all-notifications text-center" href="#"> <strong className="text-xs text-gray-600">view all notifications                                            </strong></a></li>
          </ul>
        </li>


        )
    }
}
export default Notificacao