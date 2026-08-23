import React, { useState } from "react";
import axios from "axios";

function BookUpdate() {

    const [book, setBook] = useState({
        id: "",
        title: "",
        author: "",
        category: "",
        price: "",
        status: ""
    });

    function handleChange(event) {

        setBook({
            ...book,
            [event.target.name]: event.target.value
        });

    }

    function updateBook(event) {

        event.preventDefault();

        const data = {
            ...book,
            id: Number(book.id),
            price: Number(book.price)
        };

        console.log(data);

        axios.put(
            "https://book-library-management-system-backend-roj6.onrender.com/api/update",
            data
        )

        .then((response) => {
            alert("Book Updated Successfully");
            console.log(response.data);
        })

        .catch((error) => {
            console.log(error.response?.data);
            console.log(error);
            alert("Book Update Failed");
        });
    }

    return (
        <>
            <h1>Update Book</h1>

            <form onSubmit={updateBook}>

                <input
                    type="number"
                    name="id"
                    value={book.id}
                    placeholder="Enter Book ID"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="title"
                    value={book.title}
                    placeholder="Enter Title"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="author"
                    value={book.author}
                    placeholder="Enter Author"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="category"
                    value={book.category}
                    placeholder="Enter Category"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="price"
                    value={book.price}
                    placeholder="Enter Price"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="status"
                    value={book.status}
                    placeholder="Enter Status"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Update Book
                </button>

            </form>
        </>
    );
}

export default BookUpdate;