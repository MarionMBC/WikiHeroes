import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeroesApp from './HeroesApp';
import {DarkThemeProvider} from './context/DarkThemeContext';
import 'animate.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DarkThemeProvider>
                <HeroesApp/>
        </DarkThemeProvider>
    </React.StrictMode>
)