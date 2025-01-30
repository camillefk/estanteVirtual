import React, { useState } from 'react';
import './homePage.css';
import Navbar from '../components/navbar';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      id: 1,
      title: "Harry Potter e a Pedra Filosofal",
      author: "J.K. Rowling",
      category: "Romance, Literatura fantástica, Literatura infantil, Alta fantasia",
      rating: 5,
      cover: "https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_.jpg"
    },
    {
      id: 2,
      title: "O Principe Cruel",
      author: "Holly Black",
      category: "Fantasia, Romance",
      rating: 4,
      cover: "https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      id: 3,
      title: "O Rei Perverso",
      author: "Holly Black",
      category: "Fantasia, Romance",
      rating: 4,
      cover: "https://m.media-amazon.com/images/I/91N9kjbqxWS._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      id: 4,
      title: "A Rainha do Nada",
      author: "Holly Black",
      category: "Fantasia, Romance",
      rating: 5,
      cover: "https://m.media-amazon.com/images/I/91vZBs7i-+L._AC_UY545_FMwebp_QL65_.jpg"
    }
  ];

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
