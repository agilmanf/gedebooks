import React from "react";
import "../BookCard.css";

function BookCard({ data }) {
  return (
    <>
      <div className="book-card">
        <div className="book-card-details">
          <h5>{data.title}</h5>
          <p>
            {data.author} - {data.date}
          </p>
        </div>
        <div className="book-card-action">
          <button className="btn-edit">Edit</button>
          <button className="btn-remove">Remove</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default BookCard;
