import React from "react";
import Linguagem from "./header/Linguagem";
import Mensagem from "./header/Mensagem";
import Notificacao from "./header/Notificacao";

class Header extends React.Component{
    render(){
        return(
            <>      
            <header className="header z-index-50">
            <nav className="navbar py-3 px-0 shadow-sm text-white position-relative">
              {/* Search Box*/}
              <div className="search-box shadow-sm">
                <button className="dismiss d-flex align-items-center">
                  <svg className="svg-icon svg-icon-heavy">
                    <use href="#close-1"> </use>
                  </svg>
                </button>
                <form id="searchForm" action="#" role="search">
                  <input className="form-control shadow-0" 
                  type="text"
                   placeholder="O que você está procurando..."/>
                </form>
              </div>
              <div className="container-fluid w-100">
                <div className="navbar-holder d-flex align-items-center justify-content-between w-100">
                  {/* Navbar Header*/}
                  <div className="navbar-header">
                    {/* Navbar Brand */}<a className="navbar-brand d-none d-sm-inline-block" href="index.html">
                      <div className="brand-text d-none d-lg-inline-block"><span>MPMG</span><strong> CATENA</strong></div>
                      <div className="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div></a>
                    {/* Toggle Button*/}<a className="menu-btn active" id="toggle-btn" href="#"><span></span><span></span><span></span></a>
                  </div>
                  {/* Navbar Menu */}
                  <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                    {/* Search*/}
                    <li className="nav-item d-flex align-items-center"><a id="search" href="#">
                        <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                          <use href="#find-1"> </use>
                        </svg></a>
                    </li>
                    <Notificacao/>
                    <Mensagem/>
                    <Linguagem/>
                    {/* Logout    */}
                    <li className="nav-item"><a className="nav-link text-white" href="login.html"> 
                      <span className="d-none d-sm-inline">Logout</span>
                        <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                          <use href="#security-1"> </use>
                        </svg></a></li>
                  </ul>
                </div>
              </div>
            </nav>
            </header>
            </>          
        )
    }
}
export default Header



