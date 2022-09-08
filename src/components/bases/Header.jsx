import React from "react"
class Header extends React.Component{ 
    constructor(props){
        super(props)
    }
    render(){
        return(
    <header className="header z-index-50">
        <nav className="navbar py-3 px-0 shadow-sm text-white position-relative">
        {/*Search Box*/}
          <div className="search-box shadow-sm">
            <button className="dismiss d-flex align-items-center">
              <svg className="svg-icon svg-icon-heavy">
                <use href="#close-1"> </use>
              </svg>
            </button>
            <form id="searchForm" action="#" role="search">
              <input className="form-control shadow-0" type="text" placeholder="What are you looking for..."/>
            </form>
          </div>
          <div className="container-fluid w-100">
            <div className="navbar-holder d-flex align-items-center justify-content-between w-100">
              {/*Navbar Header*/}
              <div className="navbar-header">
                {/*Navbar Brand */}<a className="navbar-brand d-none d-sm-inline-block" href="index.html">
                  <div className="brand-text d-none d-lg-inline-block"><span>MPMG - </span><strong>CATENA</strong></div>
                  <div className="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div></a>
                {/*Toggle Button*/}<a className="menu-btn active" id="toggle-btn" href="#"><span></span><span></span><span></span></a>
              </div>
              {/*Navbar Menu */}
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                {/*Search*/}
                <li className="nav-item d-flex align-items-center"><a id="search" href="#">
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#find-1"> </use>
                    </svg></a>
                </li>
                {/*Notifications*/}
                <li className="nav-item dropdown"> <a className="nav-link text-white" id="notifications" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#chart-1"> </use>
                    </svg><span className="badge bg-red badge-corner fw-normal">12</span></a>
                  <ul className="dropdown-menu dropdown-menu-end mt-3 shadow-sm" aria-labelledby="notifications">
                    <li>
                    <a className="dropdown-item py-3" href="#"> 
                        <div className="d-flex">
                          <div className="icon icon-sm bg-blue">
                            <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                              <use href="#envelope-1"> </use>
                            </svg>
                          </div>
                          <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">You have 6 new messages </span><small className="small text-gray-600">4 minutes ago</small></div>
                        </div>
                    </a>
                    </li>
                    <li>
                        <a className="dropdown-item py-3" href="#"> 
                        <div className="d-flex">
                          <div className="icon icon-sm bg-green">
                            <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                              <use href="#chats-1"> </use>
                            </svg>
                          </div>
                          <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">New 2 WhatsApp messages</span><small className="small text-gray-600">4 minutes ago</small></div>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item py-3" href="#"> 
                        <div className="d-flex">
                          <div className="icon icon-sm bg-orange">
                            <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                              <use href="#checked-window-1"> </use>
                            </svg>
                          </div>
                          <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">Server Rebooted</span><small className="small text-gray-600">8 minutos atrás</small></div>
                        </div>
                        </a>
                    </li>
                    <li>
                    <a className="dropdown-item py-3" href="#"> 
                        <div className="d-flex">
                          <div className="icon icon-sm bg-green">
                            <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                              <use href="#chats-1"> </use>
                            </svg>
                          </div>
                          <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">2 novas mensagensde whatspp</span>
                          <small className="small text-gray-600">10minutos atrás</small></div>
                        </div>
                    </a>
                    </li>
                    <li>
                     <a className="dropdown-item all-notifications text-center" href="#">
                        <strong className="text-xs text-gray-600">Veja todas notificações</strong>
                     </a>
                    </li>
                  </ul>
                </li>
                {/*Messages*/}
                <li className="nav-item dropdown"> <a className="nav-link text-white" id="messages" rel="nofollow" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#envelope-1"> </use>
                    </svg><span className="badge bg-orange badge-corner fw-normal">10</span></a>
                  <ul className="dropdown-menu dropdown-menu-end mt-3 shadow-sm" aria-labelledby="messages">
                    <li><a className="dropdown-item d-flex py-3" href="#"> <img className="img-fluid rounded-circle" src="img/avatar-1.jpg" alt="..." width="45"/>
                        <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">Jason Doe</span><small className="small text-gray-600"> 
                        Sent You Message</small></div></a></li>
                    <li>
                        <a className="dropdown-item d-flex py-3" href="#"> <img className="img-fluid rounded-circle" src="img/avatar-2.jpg" alt="..." width="45"/>
                    
                        </a></li>
                    <li><a className="dropdown-item d-flex py-3" href="#"> <img className="img-fluid rounded-circle" src="img/avatar-3.jpg" alt="..." width="45"/>
                        <div className="ms-3"><span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">Jason Doe</span><small className="small text-gray-600"> 
                        Sent You Message</small></div></a></li>
                    <li><a className="dropdown-item text-center" href="#"> <strong className="text-xs text-gray-600">Leia Todas mensagens   </strong></a></li>
                  </ul>
                </li>
                {/*Languages dropdown    */}
                <li className="nav-item dropdown"><a className="nav-link text-white dropdown-toggle d-flex align-items-center" id="languages" href="#" data-bs-toggle="dropdown" aria-expanded="false"><img className="me-2" src="img/flags/16/GB.png" alt="English"/><span className="d-none d-sm-inline-block">English</span></a>
                  <ul className="dropdown-menu dropdown-menu-end mt-3 shadow-sm" aria-labelledby="languages">
                    <li><a className="dropdown-item" rel="nofollow" href="#"> <img className="me-2" src="img/flags/16/DE.png" alt="English"/><span className="text-xs text-gray-700">German</span></a></li>
                    <li><a className="dropdown-item" rel="nofollow" href="#"> <img className="me-2" src="img/flags/16/FR.png" alt="English"/><span className="text-xs text-gray-700">French                                         </span></a></li>
                  </ul>
                </li>
                {/*Logout    */}
                <li className="nav-item"><a className="nav-link text-white" href="login.html"> <span className="d-none d-sm-inline">Sair</span>
                    <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                      <use href="#security-1"> </use>
                    </svg></a></li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
      )
    }
    }
    export default Header