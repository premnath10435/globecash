import React, { useState } from "react";
import axios from "axios";

function BookCategory() {

    const [category, setCategory] = useState("");
    const [books, setBooks] = useState([]);

    function searchCategory() {

        axios.get(
            `https://book-library-management-system-backend-roj6.onrender.com/api/category/${category}`
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
            <h1>Filter Books By Category</h1>

            <input
                value={category}
                placeholder="Enter Category"
                onChange={(event) => setCategory(event.target.value)}
            />

            <br /><br />

            <button onClick={searchCategory}>
                Search Category
            </button>

            <br /><br />

            {books.map((book) => (

                <div key={book.id}>

                    <p>ID: {book.id}</p>
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

export default BookCategory;