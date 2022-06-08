import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function InputSection({ books, setBooks }) {
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
    submitButton.current.disabled = !bookData.approve;
  }, [bookData]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: bookData.title,
      author: bookData.author,
      synopsis: bookData.synopsis,
      date: `${bookData.month}, ${bookData.year}`,
    };

    try {
      const res = await axios.post(
        "https://my-json-server.typicode.com/agilmanf/gedebooks/books",
        data
      );

      setBooks([...books, data]);
      e.target.reset();
      resetData();
      // console.log(res);
      alert("Adding New Book Success");
    } catch (error) {
      console.log(error);
    }
  }

  function resetData() {
    setBookData({
      title: "",
      author: "",
      month: "",
      year: "",
      synopsis: "",
      approve: false,
    });
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
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
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
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
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
          <span className="noselect">Approve this book to be listed</span>
        </label>
        <button ref={submitButton} type="submit" disabled>
          Submit
        </button>
      </form>
    </main>
  );
}

export default InputSection;
