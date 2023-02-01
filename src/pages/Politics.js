import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";

const Politics = () => {
  const [articles, setArticles] = useState([]);
  const term = "politics";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        //console.log(process.env.REACT_APP_ARTICLES_API_KEY);
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
        );
        const articles = await res.json();
        //console.log(articles.response.docs);
        setArticles(articles.response.docs);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, [term]);
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <section className="main-section">
          {articles.map((article) => {
            const {
              abstract,
              headline: { main },
              byline: { original },
              lead_paragraph,
              news_desk,
              section_name,
              web_url,
              _id,
              word_count,
            } = article;
            return (
              <article key={_id} className="article">
                <h2 className="article-main">{main}</h2>
                <p>{abstract}</p>
                <p>{lead_paragraph}</p>
                <ul className="list">
                  <li className="list-item">{original}</li>
                  <li className="list-item">
                    <span className="item-span">News Desk: </span>
                    {news_desk}
                  </li>
                  <li className="list-item">
                    <span className="item-span">Section Name: </span>
                    {section_name}
                  </li>
                  <li className="list-item">
                    <span className="item-span">Word Count: </span>
                    {word_count}
                  </li>
                </ul>
                <a
                  href={web_url}
                  target="_blank"
                  rel="noopener"
                  className="article-url"
                >
                  Article link
                </a>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Politics;
