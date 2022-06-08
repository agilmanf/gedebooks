import React, { useState, useEffect, useRef } from "react";

function InputSection() {
  const submitButton = useRef();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    month: "",
    year: "",
    synopsis: "",
    approve: false,
  });

  useEffect(() => {
    submitButton.current.disabled = bookData.approve ? false : true;
  }, [bookData]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: bookData.title,
      author: bookData.author,
      synopsis: bookData.synopsis,
      date: `${bookData.month}, ${bookData.year}`,
    };

    console.log(data);
  }

  return (
    <main className="input-section">
      <h1>Books</h1>
      <p>Insert the book data below.</p>
      <form id="form-book" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">
          <h5>Title</h5>
          <input
            type="text"
            placeholder="i.e Harry Potter and The Chamber of Secrets"
            required
            value={bookData.title}
            onChange={(e) =>
              setBookData({ ...bookData, title: e.target.value })
            }
          />
        </label>
        <label htmlFor="author">
          <h5>Author</h5>
          <input
            type="text"
            placeholder="i.e J. K. Rowling"
            required
            value={bookData.author}
            onChange={(e) =>
              setBookData({ ...bookData, author: e.target.value })
            }
          />
        </label>
        <div className="published">
          <h5>Published</h5>
          <div className="select-container">
            <label htmlFor="month">
              <select
                name="month"
                id="month"
                placeholder="month"
                defaultValue="month"
                required
                onChange={(e) =>
                  setBookData({ ...bookData, month: e.target.value })
                }
              >
                <option className="select-placeholder" value="month" disabled>
                  Month
                </option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </label>
            <label htmlFor="year">
              <select
                name="year"
                id="year"
                placeholder="year"
                defaultValue="year"
                required
                onChange={(e) =>
                  setBookData({ ...bookData, year: e.target.value })
                }
              >
                <option className="select-placeholder" value="year" disabled>
                  Year
                </option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </label>
          </div>
        </div>
        <label htmlFor="synopsis">
          <h5>Synopsis</h5>
          <textarea
            id="synopsis"
            rows="3"
            placeholder="Enter the synopsis of the book here"
            required
            value={bookData.synopsis}
            onChange={(e) =>
              setBookData({ ...bookData, synopsis: e.target.value })
            }
          ></textarea>
        </label>
        <label htmlFor="checkbox">
          <input
            id="checkbox"
            type="checkbox"
            required
            onChange={(e) =>
              setBookData({ ...bookData, approve: e.target.checked })
            }
          />
          <span>Approve this book to be listed</span>
        </label>
        <button ref={submitButton} type="submit" disabled>
          Submit
        </button>
      </form>
    </main>
  );
}

export default InputSection;
