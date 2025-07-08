import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Invite from './routes/Invite';


function App() {
    return (
        <div className='container'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/" element={<Invite/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;