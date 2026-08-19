import React, { useState } from "react";
import axios from "axios";

function BookRead() {

    const [id, setId] = useState("");
    const [book, setBook] = useState(null);

    function getBook() {

        axios.get(`http://localhost:8080/api/read/${id}`)

            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })

            .catch((error) => {
                console.log(error);
                alert("Book Not Found");
            });
    }

    return (
        <>
            <h1>Find Book</h1>

            <input
                type="number"
                value={id}
                placeholder="Enter Book ID"
                onChange={(event) => setId(event.target.value)}
            />

            <br /><br />

            <button onClick={getBook}>
                Search Book
            </button>

            <br /><br />

            {book && (
                <>
                    <h3>Book Details</h3>

                    <p>ID: {book.id}</p>
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Category: {book.category}</p>
                    <p>Price: {book.price}</p>
                    <p>Status: {book.status}</p>
                </>
            )}
        </>
    );
}

export default BookRead;