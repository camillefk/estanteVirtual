import React, { useState } from "react";
import LoginAdmin from "./loginAdmin";
import "./adminPanel.css";

function AdminPanel({ onAddBook }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Função chamada após login
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <div>
            {!isAuthenticated ? (
                <LoginAdmin onLogin={handleLogin} />
            ) : (
                <div className="admin-panel">
                    <h2>Painel Administrativo</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        onAddBook(book);
                        setBook({ title: "", author: "", category: "", pages: 1, rating: 1, cover: "" });
                    }}>
                        <input type="text" name="title" placeholder="Título" required />
                        <input type="text" name="author" placeholder="Autor" required />
                        <input type="text" name="category" placeholder="Categoria" required />
                        <input type="number" name="pages" placeholder="Páginas" required />
                        <input type="text" name="rating" placeholder="Avaliação (1-5)" required />
                        <input type="text" name="cover" placeholder="URL da capa" required />
                        <button type="submit">Adicionar Livro</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
