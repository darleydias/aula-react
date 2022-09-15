import Dashboard from "../components/Dashboard";
import ListOpeacaoComponent from "../components/operacao/ListOperacaoComponent";

const loadingRoutes = ()=>(

    [{
        path:"/operacoes",
        name:"Operações",
        template: ListOpeacaoComponent
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        template: Dashboard
    }]
)
export default loadingRoutes()