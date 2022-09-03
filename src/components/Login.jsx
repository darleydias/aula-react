import React from "react";
import AuthController from "../controllers/AuthController";
import AuthService from "../services/AuthService";


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={usuario:"",senha:""}
    }
    sendLogin = async (event)=>{
            event.preventDefault();

            let credential={
                login:this.state.usuario,
                password:this.state.senha
            }

            let token = await AuthController.authenticate(credential)
            AuthService.setLoggerUser(token)
            // this.props.history.push("")
    }
    render(){
        
        return(
            <div>
                <div className="container d-flex justify-content-denter">
                    <div className="card mt-5 w-50" >
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="usuario"
                                    name="usuario"
                                    value={this.state.usuario}
                                    onChange={e=>this.setState({usuario:e.target.value})}
                                    placehold="digite nome"/>

                                    <label htmlFor="senha">Usuário</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.senha}
                                    onChange={e=>this.setState({senha:e.target.value})}
                                    id="senha"
                                    name="senha"
                                    placehold="digite a senha"/>
                                </div>
                                <button type="submit" className="btn btn-info">Entrar</button>
                            </form>
                     </div>
                </div>

            </div>
          </div>
        )
    }
}
export default Login