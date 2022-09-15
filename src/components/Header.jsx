import React from "react"
import {Navbar,NavbarBrand, NavbarToggler} from "reactstrap" 
class Header extends React.Component{ 
    constructor(props){
        super(props)
    }
    render(){
        return(
          <header>
            {/* <Navbar color="light" light expand="md"> */}
            <Navbar color="light" light>
              <NavbarBrand href="/">
                <img src="https://via.placeholder.com/150x50"></img>
              </NavbarBrand>
              <NavbarToggler></NavbarToggler>
            </Navbar>
          </header>
         
      )
    }
    }
    export default Header