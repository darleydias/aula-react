import React from "react";

class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
             <nav class="side-navbar z-index-40">
          {/*  Sidebar Header*/}
          <div class="sidebar-header d-flex align-items-center py-4 px-3">
            <img class="avatar shadow-0 img-fluid rounded-circle" src="img/avatar-1.jpg" alt="..."/>
            <div class="ms-3 title">
              <h1 class="h4 mb-2">Mark Stephen</h1>
              <p class="text-sm text-gray-500 fw-light mb-0 lh-1">Web Designer</p>
            </div>
          </div>
          {/*  Sidebar Navidation Menus*/}<span class="text-uppercase text-gray-400 text-xs letter-spacing-0 mx-3 px-2 heading">Main</span>
          <ul class="list-unstyled py-4">
            <li class="sidebar-item active"><a class="sidebar-link" href="index.html"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#real-estate-1"> </use>
                </svg>Home </a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="tables.html"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#portfolio-grid-1"> </use>
                </svg>Tables </a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="charts.html"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#sales-up-1"> </use>
                </svg>Charts </a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="forms.html"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#survey-1"> </use>
                </svg>Forms </a></li>
            <li class="sidebar-item"><a class="sidebar-link" href="#exampledropdownDropdown" data-bs-toggle="collapse"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#browser-window-1"> </use>
                </svg>Example dropdown </a>
              <ul class="collapse list-unstyled " id="exampledropdownDropdown">
                <li><a class="sidebar-link" href="#">Page</a></li>
                <li><a class="sidebar-link" href="#">Page</a></li>
                <li><a class="sidebar-link" href="#">Page</a></li>
              </ul>
            </li>
            <li class="sidebar-item"><a class="sidebar-link" href="login.html"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#disable-1"> </use>
                </svg>Login page </a></li>
          </ul><span class="text-uppercase text-gray-400 text-xs letter-spacing-0 mx-3 px-2 heading">Extras</span>
          <ul class="list-unstyled py-4">
            <li class="sidebar-item"> <a class="sidebar-link" href="#"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#imac-screen-1"> </use>
                </svg>Demo </a></li>
            <li class="sidebar-item"> <a class="sidebar-link" href="#"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#chart-1"> </use>
                </svg>Demo </a></li>
            <li class="sidebar-item"> <a class="sidebar-link" href="#"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#quality-1"> </use>
                </svg>Demo </a></li>
            <li class="sidebar-item"> <a class="sidebar-link" href="#"> 
                <svg class="svg-icon svg-icon-sm svg-icon-heavy me-xl-2">
                  <use href="#security-shield-1"> </use>
                </svg>Demo </a></li>
          </ul>
        </nav>
        </div>
        )
    }
}
export default Menu