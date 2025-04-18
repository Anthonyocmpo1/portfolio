import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Book = () => {
  const [page, setPage] = useState(0);

  const pages = [<Home />, <About />, <Projects />, <Contact />];

  const nextPage = () => {
    setPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="book">
      {pages.map((Component, index) => (
        <div key={index} className={`page ${page === index ? "active" : ""}`}>
          {Component}
        </div>
      ))}

      
    </div>
  );
};

export default Book;
