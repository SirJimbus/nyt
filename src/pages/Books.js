import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=y0CnaLqFwpXihPKxU3SRWASjC8mOFHUV"
        );
        const item = await res.json();
        setBooks(item.results.books);
        console.log(item.results.books);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <section className="books-section">
          {books.map((book) => {
            const {
              author,
              book_image,
              buy_links,
              description,
              publisher,
              rank,
              title,
            } = book;
            return (
              <div>
                <article key={rank} className="books-page">
                  <div className="books-div">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <img src={book_image} alt={title} />
                    <p>Author: {author}</p>
                    <p>Publisher: {publisher}</p>
                    <h5 className="purchase">Purchase now:</h5>
                    {buy_links.map((link) => {
                      const { name, url } = link;
                      return (
                        <div key={name}>
                          <a className="books-a" href={url}>
                            {name}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </article>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
