import React from "react";
import AuthController from "../controllers/AuthController";
import { Button } from "reactstrap"
import {Link} from "react-router-dom"


class Forgot extends React.Component{
    constructor(props){
        super(props)
        this.state={email:""}
    }
    sendEmail = async (event)=>{
            event.preventDefault();
            let email = this.state.email
            let msg = await AuthController.enviaEmail(email)
   }
    render(){
        return(
            <div>
                <div className="container d-flex justify-content-center">
                    <div className="card mt-5 w-50" >
                        <div className="card-body">
                            <form onSubmit={this.sendEmail}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Digite seu e-mail</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={e=>this.setState({email:e.target.value})}
                                    placehold="digite o e-mail"/>
                                </div>
                                <button type="submit" className="btn btn-info">Enviar solicitação</button>
                               <Link to="/">
                                <Button color="link">
                                    Login
                                </Button>
                               </Link>
                            </form>
                     </div>
                </div>

            </div>
          </div>
        )
    }
}
export default Forgot