import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-home">
            <div className="navbar-left">
                <a href="#">VOLTAR PARA TELA INICIAL</a>
            </div>
            <div className="navbar-center">
                <h2>ESTANTE VIRTUAL</h2>
            </div>
            <div className="navbar-right">
                <a href="#">ESTATÍTICAS</a>
                <a href="#">LIVROS LIDOS</a>
            </div>
        </nav>
    )
}

export default Navbar;