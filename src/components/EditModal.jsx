import { useState } from "react";
import "../Modal.css";

function EditModal({ data, closeModal, editBook }) {
  const [newData, setNewData] = useState(data);

  function handleSubmit(e) {
    e.preventDefault();
    editBook(data.id, newData);
    closeModal();
  }

  return (
    <div className="modal-container">
      <div className="modal-backdrop">
        <div className="modal">
          <button className="close-modal-button" onClick={closeModal}>
            &#x2716;
          </button>
          <h4>Edit Book Data</h4>
          <form className="edit-form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="title">
              <h5>Title</h5>
              <input
                type="text"
                placeholder="i.e Harry Potter and The Chamber of Secrets"
                value={newData.title}
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="author">
              <h5>Author</h5>
              <input
                type="text"
                placeholder="i.e J. K. Rowling"
                value={newData.author}
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="published">
              <h5>Published</h5>
              <input
                type="text"
                value={newData.date}
                onChange={(e) =>
                  setNewData({ ...newData, date: e.target.value })
                }
                required
              />
            </label>

            <label htmlFor="synopsis">
              <h5>Synopsis</h5>
              <textarea
                id="synopsis"
                rows="3"
                value={newData.synopsis}
                onChange={(e) =>
                  setNewData({ ...newData, synopsis: e.target.value })
                }
                placeholder="Enter the synopsis of the book here"
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
