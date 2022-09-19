import React,{useEffect,useState} from "react";
import OperacaoController from "../../controllers/OperacaoController";
import {Link, useNavigate,useParams} from "react-router-dom"

const ListOpeacaoComponent=(props)=>{
  
    var [operacoes,setOperacoes] = useState([])
    // detail = detail.bind(this);
    // deletar = deletar.bind(this);

    const params= useParams();
    // const {codigo} = params;
    var navigate = useNavigate();
    
    useEffect((navigate) => {   
        var data = OperacaoController.getOperacoes()
        console.log(data.nome)
        if (data === 0) {
            console.log('Ocorreu um erro ao listar OPERACOES!')
            navigate('/')
        }
        else {
            setOperacoes(data)
        }
    },[]);

    var addOperacao=()=> {
        navigate('/add-operacao/00')
    }

    var detail=(codigo)=>{
        navigate(`/view-operacao/${codigo}`);
    }

    var deletar =(codigo)=>{
        navigate(`/delete-operacao/${codigo}`)
    }
    var update=(codigo)=> {
        navigate(`/add-operacao/${codigo}`)
    }
    //operacoes = [{codigo:1,nome:"Darley"}]
        return(
            
            <div>
            
            <h2 className="text-center">Lista de Operacoes</h2>
            <button className="btn btn-primary" onClick={() => addOperacao()}>Novo Item</button>
            
            <hr />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Operação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            
                            operacoes.map((operacao, index) =>{
                                return(
                                <tr key={index}>
                                    <td>{operacao.codigo}</td>
                                    <td>{operacao.nome}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm" onClick={() => detail(operacao.codigo)()}>Detalhes</button>
                                        <button style={{ marginLeft: "10px" }} 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deletar(operacao.codigo)}>
                                            Excluir
                                        </button>
                                        <button style={{ marginLeft: "10px" }} 
                                            className="btn btn-warning btn-sm"
                                            onClick={() => update(operacao.codigo)}>
                                            Alterar</button>
                                    </td>
                                </tr>
                                )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
}
export default ListOpeacaoComponent