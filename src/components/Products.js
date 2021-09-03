import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";
const Products = (props) => {
  const context = useContext(BooksContext);
  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/Cart">Sepetim({totalCartCount})</Link>
      </h2>
      {context.state.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar:{book.author}</p>
            <p>Fiyat:&#8378;{book.price}</p>
            <button onClick={() => context.addBook(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
