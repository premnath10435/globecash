import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="pb-5">


            <div
                className="rounded-4 mt-4 overflow-hidden shadow-lg text-white"
                style={{
                    background:
                        "linear-gradient(135deg, #0f172a, #1e3a8a, #4f46e5)",
                    minHeight: "450px"
                }}
            >

                <div className="container h-100">

                    <div className="row align-items-center py-5">

                        {/* LEFT */}

                        <div className="col-lg-7 p-4">

                            <span className="badge rounded-pill bg-light text-primary px-3 py-2 mb-3">
                                📚 SMART LIBRARY MANAGEMENT
                            </span>

                            <h1 className="display-3 fw-bold">
                                Manage Your
                                <br />
                                <span className="text-warning">
                                    Books Smarter.
                                </span>
                            </h1>

                            <p className="lead mt-4 text-light">
                                A simple and powerful Book Management System
                                to organize your complete book collection.
                            </p>

                            <p className="text-white-50">
                                Add books, search records, update information,
                                delete records and filter your library with ease.
                            </p>

                            <div className="mt-4">

                                <Link
                                    to="/readall"
                                    className="btn btn-warning btn-lg fw-bold rounded-pill px-4 me-3 shadow"
                                >
                                    📖 Explore Library
                                </Link>

                                <Link
                                    to="/insert"
                                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                                >
                                    ➕ Add Book
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-5 text-center">

                            <div
                                className="bg-white bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center shadow-lg"
                                style={{
                                    width: "270px",
                                    height: "270px",
                                    border: "1px solid rgba(255,255,255,0.2)"
                                }}
                            >

                                <div>

                                    <div
                                        style={{
                                            fontSize: "105px",
                                            filter: "drop-shadow(0 15px 15px rgba(0,0,0,0.3))"
                                        }}
                                    >
                                        📚
                                    </div>

                                    <h5 className="fw-bold mt-2">
                                        YOUR LIBRARY
                                    </h5>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="container">

                <div
                    className="row g-3"
                    style={{ marginTop: "-35px" }}
                >

                    <div className="col-md-3">

                        <div className="card border-0 shadow rounded-4 text-center p-3">

                            <h3 className="fw-bold text-primary">
                                📚
                            </h3>

                            <h4 className="fw-bold">
                                Books
                            </h4>

                            <small className="text-muted">
                                Manage your collection
                            </small>

                        </div>

                    </div>


                    <div className="col-md-3">

                        <div className="card border-0 shadow rounded-4 text-center p-3">

                            <h3 className="fw-bold text-success">
                                ⚡
                            </h3>

                            <h4 className="fw-bold">
                                Fast
                            </h4>

                            <small className="text-muted">
                                Quick book operations
                            </small>

                        </div>

                    </div>


                    <div className="col-md-3">

                        <div className="card border-0 shadow rounded-4 text-center p-3">

                            <h3 className="fw-bold text-warning">
                                🔍
                            </h3>

                            <h4 className="fw-bold">
                                Search
                            </h4>

                            <small className="text-muted">
                                Find books easily
                            </small>

                        </div>

                    </div>


                    <div className="col-md-3">

                        <div className="card border-0 shadow rounded-4 text-center p-3">

                            <h3 className="fw-bold text-danger">
                                ⚙️
                            </h3>

                            <h4 className="fw-bold">
                                CRUD
                            </h4>

                            <small className="text-muted">
                                Complete management
                            </small>

                        </div>

                    </div>

                </div>

            </div>


            <div className="container mt-5">

                <div className="text-center mb-5">

                    <span className="text-primary fw-bold">
                        POWERFUL FEATURES
                    </span>

                    <h2 className="display-6 fw-bold mt-2">
                        Everything You Need
                    </h2>

                    <p className="text-muted">
                        Manage your entire book collection from one place.
                    </p>

                </div>


                <div className="row g-4">


                    {/* INSERT */}

                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm rounded-4 h-100 p-4"
                        >

                            <div
                                className="bg-primary bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    fontSize: "30px"
                                }}
                            >
                                ➕
                            </div>

                            <h4 className="fw-bold">
                                Add Books
                            </h4>

                            <p className="text-muted">
                                Add new books with title, author,
                                category, price and status.
                            </p>

                            <Link
                                to="/insert"
                                className="text-decoration-none fw-bold mt-auto"
                            >
                                Add New Book →
                            </Link>

                        </div>

                    </div>



                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm rounded-4 h-100 p-4"
                        >

                            <div
                                className="bg-success bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    fontSize: "30px"
                                }}
                            >
                                🔍
                            </div>

                            <h4 className="fw-bold">
                                Find Books
                            </h4>

                            <p className="text-muted">
                                Search and view complete book details
                                using the unique book ID.
                            </p>

                            <Link
                                to="/read"
                                className="text-decoration-none text-success fw-bold"
                            >
                                Find a Book →
                            </Link>

                        </div>

                    </div>



                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm rounded-4 h-100 p-4"
                        >

                            <div
                                className="bg-warning bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    fontSize: "30px"
                                }}
                            >
                                📖
                            </div>

                            <h4 className="fw-bold">
                                Explore Library
                            </h4>

                            <p className="text-muted">
                                View all available books in your
                                complete library.
                            </p>

                            <Link
                                to="/readall"
                                className="text-decoration-none text-warning fw-bold"
                            >
                                View All Books →
                            </Link>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm rounded-4 h-100 p-4"
                        >

                            <div
                                className="bg-info bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    fontSize: "30px"
                                }}
                            >
                                ✏️
                            </div>

                            <h4 className="fw-bold">
                                Update Books
                            </h4>

                            <p className="text-muted">
                                Keep your book information updated
                                whenever changes are needed.
                            </p>

                            <Link
                                to="/update"
                                className="text-decoration-none text-info fw-bold"
                            >
                                Update Book →
                            </Link>

                        </div>

                    </div>



                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm rounded-4 h-100 p-4"
                        >

                            <div
                                className="bg-danger bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    fontSize: "30px"
                                }}
                            >
                                🗑️
                            </div>

                            <h4 className="fw-bold">
                                Delete Books
                            </h4>

                            <p className="text-muted">
                                Remove unwanted book records from
                                your library easily.
                            </p>

                            <Link
                                to="/delete"
                                className="text-decoration-none text-danger fw-bold"
                            >
                                Delete Book →
                            </Link>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm rounded-4 h-100 p-4"
                        >

                            <div
                                className="bg-secondary bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    fontSize: "30px"
                                }}
                            >
                                🔎
                            </div>

                            <h4 className="fw-bold">
                                Filter Books
                            </h4>

                            <p className="text-muted">
                                Filter your collection based on
                                different book categories.
                            </p>

                            <Link
                                to="/filter"
                                className="text-decoration-none text-secondary fw-bold"
                            >
                                Filter Books →
                            </Link>

                        </div>

                    </div>

                </div>

            </div>


            <div className="container mt-5">

                <div
                    className="rounded-4 p-5 text-white shadow-lg"
                    style={{
                        background:
                            "linear-gradient(135deg, #4f46e5, #7c3aed)"
                    }}
                >

                    <div className="row align-items-center">

                        <div className="col-md-8">

                            <h2 className="fw-bold">
                                Ready to build your library? 🚀
                            </h2>

                            <p className="mb-0 text-white-50">
                                Start adding your books and manage
                                everything from one place.
                            </p>

                        </div>

                        <div className="col-md-4 text-md-end mt-3 mt-md-0">

                            <Link
                                to="/insert"
                                className="btn btn-light btn-lg rounded-pill px-4 fw-bold"
                            >
                                Start Managing →
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;