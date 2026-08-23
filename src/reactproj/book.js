import React, { useState } from "react";
import axios from "axios";
import "./insert.css";

function Student() {

    const [student, setStudent] = useState({
        author: "",
        category: "",
        price: "",
        status: "",
        title: ""
    });

    function handleChange(event) {
        setStudent({
            ...student,
            [event.target.name]: event.target.value
        });
    }
    
    function addStudent(event) {

        event.preventDefault();

        console.log(student);

        axios.post(
            "https://book-library-management-system-backend-roj6.onrender.com/api/insert",
            student
        )

        .then((response) => {
            alert("Book Added Successfully");
            console.log(response.data);
        })

        .catch((error) => {
            console.log(error);
            alert("Book Add Failed");
        });
    }

    return (
        <>
            <h1>Add Book</h1>

            <form onSubmit={addStudent}>

                <input
                    name="title"
                    value={student.title}
                    placeholder="Enter Title"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="author"
                    value={student.author}
                    placeholder="Enter Author"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="category"
                    value={student.category}
                    placeholder="Enter Category"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="price"
                    value={student.price}
                    placeholder="Enter Price"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="status"
                    value={student.status}
                    placeholder="Enter Status"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Add Book
                </button>

            </form>
        </>
    );
}

export default Student;
