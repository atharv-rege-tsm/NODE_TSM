import React, { useState } from 'react'

const LibraryManagement = () => {
    const [book, setBook] = useState({
        title: "",
        author: ""
    });
    const [books, setBooks] = useState([]);
    const handleDelete = (i) => {
        const updatedBooks = books.filter((_, index) => i !== index)
        setBooks(updatedBooks);
    }
    const addBook = (e) => {
        e.preventDefault();
        setBooks([...books, book]);
        setBook({ title: "", author: "" });
    }
    return (
        <>
            <h1>Add Book</h1>
            <form onSubmit={addBook}>
                <input type="text" onChange={(e) => setBook({ ...book, title: e.target.value })} value={book.title} placeholder="Book Title" />
                <input type="text" onChange={(e) => setBook({ ...book, author: e.target.value })} value={book.author} placeholder="Author" />
                <button type="submit">Add Book</button>
            </form>

            <h1>Books</h1>
            <ul>
                {books.map((book, i) => (
                    <li key={i}>{book.title} written by {book.author} <button onClick={() => { handleDelete(i) }} >X</button></li>
                ))}
            </ul>
        </>
    )
}

export default LibraryManagement