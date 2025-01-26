import React from 'react';
import { useNavigate } from 'react-router-dom';
import './inicialPage.css';



const inicialPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/homePage');
    }

  return (
    <div className="box-inicial">
      <h1 className="title-inicial">ESTANTE VIRTUAL</h1>
      <div className="center-box">
        <h2>SEJAM BEM-VINDOS A MINHA ESTANTE VIRTUAL</h2>
        <p>
          Este é o lugar onde eu registro todos os livros que eu já li, onde dou
          minhas avaliações e minhas opiniões acerca de cada livro. Um lugar
          mágico onde guardo memórias felizes e acolhedoras.
        </p>
        <button className="button-inicial" onClick={handleClick}>
          ENTRAR
        </button>
      </div>
    </div>
  );
}

export default inicialPage;
