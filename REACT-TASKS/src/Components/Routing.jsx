import React from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import APITesting from './APITesting';
import Counter from './Counter';
import ToDoList from './ToDoList';
import TodosRedux from './TodosRedux';
import AddTodo from './AddTodo';
import DynamicForm from './DynamicForm';
import Login from './Login';
import LibraryManagement from './LibraryManagement';
import LazyGallery from './LazyGallery';

const Routing = () => {
    return (
        <BrowserRouter>
            <nav className="flex gap-4 bg-gray-200 p-4">
                <Link to="/api-testing" className="text-blue-600">API Testing</Link>
                <Link to="/counter" className="text-green-600">Counter</Link>
                <Link to="/todo" className="text-red-600">Todo</Link>
                <Link to="/todo-redux" className="text-red-600">Redux Todo</Link>
                <Link to="/dynamic-form" className="text-red-600">Dynamic Form</Link>
                <Link to="/login" className="text-red-600">Login</Link>
                <Link to="/library" className="text-cyan-600">Library</Link>
                <Link to="/gallery" className="text-cyan-600">Gallery</Link>
            </nav>
            <Routes>
                <Route path="/api-testing" element={<APITesting />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<ToDoList />} />
                <Route path="/todo/add" element={<AddTodo />} />
                <Route path="/todo-redux" element={<TodosRedux />} />
                <Route path="/dynamic-form" element={<DynamicForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/library" element={<LibraryManagement />} />
                <Route path="/gallery" element={<LazyGallery />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing