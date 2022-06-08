import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import InputSection from "./components/InputSection";
import DataSection from "./components/DataSection";
import Navbar from "./components/Navbar";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (books.length === 0) getBooks();
  }, []);

  async function getBooks() {
    const res = await axios
      .get("https://my-json-server.typicode.com/agilmanf/gedebooks/books")
      .catch((err) => console.log(err));

    setBooks(res.data);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <InputSection books={books} setBooks={setBooks} />
        <DataSection books={books} setBooks={setBooks} />
      </div>
    </div>
  );
}

export default App;
