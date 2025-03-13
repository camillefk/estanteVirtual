import React, { useState } from "react";
import LoginAdmin from "./loginAdmin";
import Navbar from "../components/navbar";
import "./adminPanel.css";

function AdminPanel() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [book, setBook] = useState({
        title: "",
        author: "",
        category: "",
        pages: 1,
        rating: 1,
        cover: ""
    });

    // Função chamada após login
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    // Atualiza os valores do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
    };

    // Adiciona o livro ao localStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Obtém os livros já salvos
        const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
        
        // Cria um novo livro com um ID único
        const newBook = { ...book, id: Date.now() };

        // Adiciona o novo livro à lista e salva no localStorage
        const updatedBooks = [...savedBooks, newBook];
        localStorage.setItem("books", JSON.stringify(updatedBooks));

        // Exibe um alerta informando que o livro foi adicionado
        alert("Livro adicionado com sucesso!");

        // Reseta o formulário
        setBook({
            title: "",
            author: "",
            category: "",
            pages: 1,
            rating: 1,
            cover: ""
        });
    };

    return (
        <div>
            <Navbar />
            {!isAuthenticated ? (
                <LoginAdmin onLogin={handleLogin} />
            ) : (
                <div className="admin-panel">
                    <h2>Painel Administrativo</h2>
                    <form onSubmit={handleSubmit}>
                        <input className="title-admin"
                            type="text" 
                            name="title" 
                            placeholder="Título" 
                            value={book.title} 
                            onChange={handleChange} 
                            required 
                        />
                        <input className="author-admin"
                            type="text" 
                            name="author" 
                            placeholder="Autor" 
                            value={book.author} 
                            onChange={handleChange} 
                            required 
                        />
                        <input className="category-admin"
                            type="text" 
                            name="category" 
                            placeholder="Categoria" 
                            value={book.category} 
                            onChange={handleChange} 
                            required 
                        />
                        <input className="pages-admin"
                            type="number" 
                            name="pages" 
                            placeholder="Páginas" 
                            value={book.pages} 
                            onChange={handleChange} 
                            required 
                        />
                        <select className="rating-admin"
                            name="rating" 
                            value={book.rating} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="1">★☆☆☆☆ (1)</option>
                            <option value="2">★★☆☆☆ (2)</option>
                            <option value="3">★★★☆☆ (3)</option>
                            <option value="4">★★★★☆ (4)</option>
                            <option value="5">★★★★★ (5)</option>
                        </select>
                        <input className="cover-admin"
                            type="text" 
                            name="cover" 
                            placeholder="URL da capa" 
                            value={book.cover} 
                            onChange={handleChange} 
                            required 
                        />
                        <button className="button-admin" type="submit">Adicionar Livro</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
