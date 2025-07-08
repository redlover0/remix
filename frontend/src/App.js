// src/App.js

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Invite from './routes/Invite';
import {ThemeProvider as ThemeUIProvider} from 'theme-ui';
import {theme} from './theme';

function App() {
    return (
        <ThemeUIProvider theme={theme}>
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/* If i was to scale i would create an invite page just like how thomas did */}
                    <Route path="/" element={<Invite/>}/>
                </Routes>
            </Router>
        </div>
        </ThemeUIProvider>
    );
}

export default App;