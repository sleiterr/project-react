// App.jsx

import "./App.css";
import React from "react";
import Product from "./product/product";
import Mailbox from "./message/mailbox";
import PackingList from "./packingList/packning";
import BookList from "./books/books";
import { favBooks } from "./books/Data";

export default function App() {
  const username = "John";
  const message = ["Hello", "How are you?", "Check this out!"];
  return (
    <div>
      <h1>Products</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <h2></h2>
      <Mailbox username={username} message={message} />
      <PackingList />
      <>
        <h2>Books of the week</h2>
        <BookList books={favBooks} />
      </>
    </div>
  );
}
