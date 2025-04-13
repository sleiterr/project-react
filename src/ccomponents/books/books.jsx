// books.jsx
import React from "react"; //??

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((books) => {
        return <li key={books.id}>{books.name}</li>;
      })}
    </ul>
  );
};

export default BookList;
