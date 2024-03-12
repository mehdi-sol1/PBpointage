// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drag from './components/Drag';
import Login from './components/Login';

const App = () => {
  return (
    <div className='scroll-smooth'>      
        <Drag/>
    </div>
  );
};

export default App;
