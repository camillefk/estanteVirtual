import React, { useState } from 'react';
import './homePage.css';
import Navbar from '../components/navbar';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      id: 1,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      category: "Romance",
      rating: 5,
      cover: "https://m.media-amazon.com/images/I/51sV5qFnN+L.jpg"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Distopia",
      rating: 4,
      cover: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
      id: 3,
      title: "O Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasia",
      rating: 5,
      cover: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg"
    }
  ];

  // Filtra os livros conforme o que o usuário digita
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
