import React, { useState, useEffect } from 'react';
import './homePage.css';
import Navbar from '../components/navbar';
import AdminPanel from "../screens/adminPanel"; 

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
  }, []);

  const handleAddBook = (newBook) => {
    const updatedBooks = [...books, { id: books.length + 1, ...newBook }];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

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
        <AdminPanel onAddBook={handleAddBook} />
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
