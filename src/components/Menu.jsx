import React from "react";

class Menu extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  operacao() {
    this.props.history.push(`/list-operacao`);
  }
    render(){
        return(
        <div>
             <nav className="side-navbar z-index-40">
          {/*  Sidebar Header*/}
          <div className="sidebar-header d-flex align-items-center py-4 px-3">
            <img className="avatar shadow-0 img-fluid rounded-circle" src="img/avatar-1.jpg" alt="..."/>
            <div className="ms-3 title">
              <h1 className="h4 mb-2">Mark Stephen</h1>
              <p className="text-sm text-gray-500 fw-light mb-0 lh-1">Web Designer</p>
            </div>
          </div>
          {/*  Sidebar Navidation Menus*/}<span className="text-uppercase text-gray-400 text-xs letter-spacing-0 mx-3 px-2 heading">Main</span>
          <ul className="list-unstyled py-4">
            <li className="sidebar-item active"><a className="sidebar-link" href="index.html"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#real-estate-1"> </use>
                </svg>Home </a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="tables.html"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#portfolio-grid-1"> </use>
                </svg>Tables </a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="charts.html"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#sales-up-1"> </use>
                </svg>Charts </a></li>
            <li className="sidebar-item">
              <button className="sidebar-link" onClick={() => this.operacao()}> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#survey-1"> </use>
                </svg>Operações</button></li>
            <li className="sidebar-item"><a className="sidebar-link" href="#exampledropdownDropdown" data-bs-toggle="collapse"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#browser-window-1"> </use>
                </svg>Example dropdown </a>
              <ul className="collapse list-unstyled " id="exampledropdownDropdown">
                <li><a className="sidebar-link" href="#1">Page</a></li>
                <li><a className="sidebar-link" href="#2">Page</a></li>
                <li><a className="sidebar-link" href="#3">Page</a></li>
              </ul>
            </li>
            <li className="sidebar-item"><a className="sidebar-link" href="login.html"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#disable-1"> </use>
                </svg>Login page </a></li>
          </ul><span className="text-uppercase text-gray-400 text-xs letter-spacing-0 mx-3 px-2 heading">Extras</span>
          <ul className="list-unstyled py-4">
            <li className="sidebar-item"> <a className="sidebar-link" href="#1"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#imac-screen-1"> </use>
                </svg>Demo </a></li>
            <li className="sidebar-item"> <a className="sidebar-link" href="#2"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#chart-1"> </use>
                </svg>Demo </a></li>
            <li className="sidebar-item"> <a className="sidebar-link" href="#3"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#quality-1"> </use>
                </svg>Demo </a></li>
            <li className="sidebar-item"> <a className="sidebar-link" href="#4"> 
                <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#security-shield-1"> </use>
                </svg>Demo </a></li>
          </ul>
        </nav>
        </div>
        )
    }
}
export default Menu