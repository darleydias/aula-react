import React from "react";
import AuthController from "../controllers/AuthController";
import AuthService from "../services/AuthService";
import { Button } from "reactstrap"
import {Link, useNavigate,useParams} from "react-router-dom"
import { useState } from "react";
import {useForm} from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

export default function Login(props) {

    const [data,setData] = useState("");
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate = useNavigate();
    const params= useParams();
    const {codigo} = params;
    
    
    const  onSubmit = async (data) =>{
        let credential={
            login:data.login,
            senha:data.senha
        }
        
        var token = await AuthController.authenticate(credential)
        .then((token) => {
            AuthService.setLoggerUser(token)
            navigate("/")
         })
        .catch(error => {
            if(error.message=="Request failed with status code 404"){
                toast.warning("Usuario inexitente")
                navigate("/login/u")
            }
            if(error.message=="Request failed with status code 403"){
                toast.warning("Senha errada")
                navigate("/login/s")
            }

        });

          
    }
    
    return(
            <div>
                <div className="container d-flex justify-content-center">
                    <div className="card mt-5 w-50" >
                        <div className="card-body">
                          
                        <ToastContainer />
                         <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input {...register('login',{required:true})} 
                                            placeholder="digite o login" 
                                            name='login'
                                            type="text"
                                            id="login"
                                            className='form-control'
                                            >
                                    </input>

                                    <label htmlFor="senha">senha</label>                         
                                  
                                    <input {...register('senha',{required:true})} 
                                            placeholder="digite a senha" 
                                            name='senha'
                                            type="password"
                                            id="senha"
                                            className='form-control'
                                            >
                                    </input>
                                </div>
                                <button type="submit" className="btn btn-info">Entrar</button>
                               <Link to="/forgot">
                                <Button color="link">
                                    Esqueceu a senha
                                </Button>
                               </Link>
                            </form>
                     </div>
                </div>

            </div>
          </div>
        )
}
