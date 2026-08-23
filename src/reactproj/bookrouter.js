import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import Book from "./book";
import BookRead from "./bookread";
import BookReadAll from "./bookreadall";
import DeleteBook from "./deletebook";
import UpdateBook from "./bookupdate";
import FilterBook from "./filterbook";

function BookRouter() {
    return (
        <HashRouter>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

                <div className="container">

                    <Link
                        className="navbar-brand fw-bold"
                        to="/"
                    >
                        📚 Book Management
                    </Link>

                    <div className="navbar-nav ms-auto">

                        <Link
                            className="nav-link px-3"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="nav-link px-3"
                            to="/insert"
                        >
                            Insert
                        </Link>

                        <Link
                            className="nav-link px-3"
                            to="/read"
                        >
                            Find Book
                        </Link>

                        <Link
                            className="nav-link px-3"
                            to="/readall"
                        >
                            All Books
                        </Link>

                        <Link
                            className="nav-link px-3"
                            to="/update"
                        >
                            Update
                        </Link>

                        <Link
                            className="nav-link px-3"
                            to="/delete"
                        >
                            Delete
                        </Link>

                        <Link
                            className="nav-link px-3"
                            to="/filter"
                        >
                            Filter
                        </Link>

                    </div>

                </div>

            </nav>

            <div className="container mt-4">

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/insert"
                        element={<Book />}
                    />

                    <Route
                        path="/read"
                        element={<BookRead />}
                    />

                    <Route
                        path="/readall"
                        element={<BookReadAll />}
                    />

                    <Route
                        path="/update"
                        element={<UpdateBook />}
                    />

                    <Route
                        path="/delete"
                        element={<DeleteBook />}
                    />

                    <Route
                        path="/filter"
                        element={<FilterBook />}
                    />

                </Routes>

            </div>

        </HashRouter>
    );
}

export default BookRouter;