import React, { useState, useEffect } from 'react';
import './homePage.css';
import Navbar from '../components/navbar';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <Navbar />
      
      <div className="box-homePage">
        <div className="header-container">
          <h2>Livros Lidos</h2>
          <input
            type="text"
            placeholder="Buscar por título, autor ou categoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
        <hr />
        <div className="books-container">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p><strong>Autor:</strong> {book.author}</p>
                <p><strong>Categoria:</strong> {book.category}</p>
                <p><strong>Avaliação:</strong> {"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}</p>
                <button className="btn-ver-mais">Ver Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
