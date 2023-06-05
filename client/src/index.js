import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route
            path='/'
            element={<Home/>}
            />
            <Route
            path='/dashboard'
            element={<Dashboard/>}
            />
        </Routes>
    </Router>
);

