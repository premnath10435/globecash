import React, { useState } from "react";
import axios from "axios";

function BookDelete() {

    const [id, setId] = useState("");

    function deleteBook() {

        axios.delete(`http://localhost:8080/api/delete/${id}`)

            .then((response) => {
                alert("Book Deleted Successfully");
                console.log(response.data);
            })

            .catch((error) => {
                console.log(error);
                alert("Book Delete Failed");
            });
    }

    return (
        <>
            <h1>Delete Book</h1>

            <input
                type="number"
                value={id}
                placeholder="Enter Book ID"
                onChange={(event) => setId(event.target.value)}
            />

            <br /><br />

            <button onClick={deleteBook}>
                Delete Book
            </button>
        </>
    );
}

export default BookDelete;