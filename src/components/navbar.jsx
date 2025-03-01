import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-home">
            <div className="navbar-left">
                <Link to="/">VOLTAR PARA TELA INICIAL</Link>
            </div>
            <div className="navbar-center">
                <h2>ESTANTE VIRTUAL</h2>
            </div>
            <div className="navbar-right">
                <Link to="/statisticPage">ESTATÍSTICAS</Link>
                <Link to="/homePage">LIVROS LIDOS</Link>
                <Link to="/adminPanel">ADMIN</Link>
            </div>
        </nav>
    );
}

export default Navbar;