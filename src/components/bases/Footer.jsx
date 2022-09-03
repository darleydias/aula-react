import React from "react";

class Footer extends React.Component{
    render(){
        return(
                <footer className="footer navbar-fixed-bottom bg-darkBlue text-white text-center py-3 w-100 text-xs" id="footer">
                    <div className="container-fluid">
                    <div className="row gy-2">
                        <div className="col-sm-6 text-sm-start">
                        <p className="mb-0">Ministério Público de Minas Gerais &copy; 2022-2022</p>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                        <p className="mb-0">Desenvolvido por  <a href="https://bootstrapious.com/p/admin-template" className="text-white text-decoration-none">Darley Dias</a></p>
                
                        </div>
                    </div>
                    </div>
                </footer>

        )
    }
}
export default Footer