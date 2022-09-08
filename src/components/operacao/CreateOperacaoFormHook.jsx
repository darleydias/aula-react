import React,{useEffect}from 'react'
import { useState } from "react";
import {useForm} from 'react-hook-form'
import OperacaoController from '../../controllers/OperacaoController';
import {useHistory} from "react-router-dom"


function CreateOperacaoFormHook(props){

    const history = useHistory();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [data,setData] = useState("");

    const  onSubmit = async (data) =>{
        let resultado = await OperacaoController.createOperacao(data)
        history.push("/list-operacao")
    }

    const fetchFunction = async ()=>{
            const operacao = await OperacaoController.buscar(props.match.params.codigo)
            let data = {'codigo':operacao.codigo,'nome':operacao.nome,'descricao':operacao.descricao}
            // TODO : PASSAR ESSES VALORES PARA OS CAMPOS
            console.log(data)
    };
    
    useEffect(() => {   
        fetchFunction()
    })
    
    return(
    <div>
        <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Nova Operação</h2>
                <div className='card-body'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Código</label>
                        <input {...register('codigo',{required:true})} 
                                placeholder="digite o código" 
                                name='codigo'
                                id="codigo"
                                className='form-control'
                                >
                        </input>
                        {errors.codigo && <p className='alert alert-warning'>código é obrigatório</p>}
                        <label>Nome</label>
                        <input {...register('nome',{required:true})} 
                                placeholder="digite o Nome" 
                                name='nome'
                                id="nome"
                                className='form-control'>
                        </input>
                        {errors.nome && <p className='alert alert-warning'>Nome é obrigatório</p>}
                        <label>Descrição</label>
                        <input {...register('descricao',{required:true})} 
                                placeholder="digite a descricao" 
                                name='descricao'
                                id="descricao"
                                className='form-control'>
                        </input>
                        {errors.descricao && <p className='alert alert-warning'>Descrição é obrigatória</p>}
                        <button type='submit' className='btn btn-warning' >Gravar</button>
                    </form>
                </div>
                </div>
                </div>
                </div>
                    
            </div>
    )
}
export default CreateOperacaoFormHook;