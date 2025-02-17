import React, { useState } from "react";
import "./adminPanel.css";

function AdminPanel({ onAddBook}) {
    //estado para armazenar os dados dos livros novos
    const [book, setBook] = useState({
        title: "",
        author: "",
        category: "",
        pages: 1,
        rating: 1,
        cover: "", 
    });

    //atualiza o estado conforme o usuário digita
    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value});
    };

    //funcao que vai ser chamada quando o formulário for enviado
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddBook(book); //chamando a funçao que adiciona o livro na HomePage
        setBook({ title: "", author: "", category: "", pages: 1, rating: 1, cover: "" }); //isso aqui limpa o formulário
    };

    return (
        <div className="admin-panel">
            <h2>Painel Administrativo</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Título" value={book.title} onChange={handleChange} required />
                <input type="text" name="author" placeholder="Autor" value={book.author} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Categoria" value={book.category} onChange={handleChange} required />
                <input type="number" name="pages" placeholder="Páginas" value={book.pages} onChange={handleChange} required />
                <input type="text" name="rating" placeholder="Avaliação (1-5)" value={book.rating} onChange={handleChange} required />
                <input type="text" name="cover" placeholder="URL da capa" value={book.cover} onChange={handleChange} required />
                <button type="submit">Adicionar Livro</button>

            </form>
        </div>
    );
}

export default AdminPanel;