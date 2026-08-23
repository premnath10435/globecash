import React, { useState } from "react";
import axios from "axios";

function BookAll() {

    const [books, setBooks] = useState([]);

    function readBooks() {

        axios.get(
            "https://book-library-management-system-backend-roj6.onrender.com/api/read"
        )

        .then((response) => {
            console.log(response.data);
            setBooks(response.data);
        })

        .catch((error) => {
            console.log(error);
            alert("Books Not Found");
        });
    }

    return (
        <>
            <h1>Read Books</h1>

            <button onClick={readBooks}>
                Read All Books
            </button>

            <br /><br />

            {books.map((book) => (

                <div key={book.id}>

                    <h3>Book ID: {book.id}</h3>

                    <p>Title: {book.title}</p>

                    <p>Author: {book.author}</p>

                    <p>Category: {book.category}</p>

                    <p>Price: {book.price}</p>

                    <p>Status: {book.status}</p>

                    <hr />

                </div>

            ))}
        </>
    );
}

export default BookAll;