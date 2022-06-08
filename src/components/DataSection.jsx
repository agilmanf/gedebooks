import React from "react";
import BookCard from "./BookCard";

function DataSection() {
  return (
    <div className="data-section">
      <h1>Book List</h1>
      <div className="book-container">
        <BookCard
          data={{
            title: "The Maze Runner",
            author: "James Dashner",
            date: "Oct, 2009",
          }}
        />
        <BookCard
          data={{
            title: "The Maze Runner",
            author: "James Dashner",
            date: "Oct, 2009",
          }}
        />
      </div>
    </div>
  );
}

export default DataSection;
