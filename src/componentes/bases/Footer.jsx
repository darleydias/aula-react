import React from "react";

class Footer extends React.Component{
    render(){
        return(
                <footer class="footer navbar-fixed-bottom bg-darkBlue text-white text-center py-3 w-100 text-xs" id="footer">
                    <div class="container-fluid">
                    <div class="row gy-2">
                        <div class="col-sm-6 text-sm-start">
                        <p class="mb-0">Ministério Público de Minas Gerais &copy; 2022-2022</p>
                        </div>
                        <div class="col-sm-6 text-sm-end">
                        <p class="mb-0">Desenvolvido por  <a href="https://bootstrapious.com/p/admin-template" class="text-white text-decoration-none">Darley Dias</a></p>
                
                        </div>
                    </div>
                    </div>
                </footer>

        )
    }
}
export default Footer