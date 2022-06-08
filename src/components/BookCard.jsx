import { useState } from "react";
import "../BookCard.css";
import EditModal from "./EditModal";

function BookCard({ data, deleteBook, editBook }) {
  const [active, setActive] = useState(false);
  function toggleModal() {
    setActive(!active);
  }

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
          <button className="btn-edit" onClick={() => toggleModal()}>
            Edit
          </button>
          <button className="btn-remove" onClick={() => deleteBook(data.id)}>
            Remove
          </button>
        </div>
      </div>
      <hr />
      {active ? (
        <EditModal data={data} editBook={editBook} closeModal={toggleModal} />
      ) : (
        ""
      )}
    </>
  );
}

export default BookCard;
