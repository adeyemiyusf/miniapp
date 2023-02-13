import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Main} from './pages/main/main';
import Login from './pages/login';
import Navbar from './component/Navbar';
import CreatePost from './pages/create-post/createPost';

function App() {
  return (
    <div className="App">
         <Router>
          <Navbar  />
      <Routes>
        <Route path = '/'  element = {<Main/>} />
        <Route path = '/login'  element = {<Login/>} />

        <Route path = '/createPost'  element = {<CreatePost/>} />
        
      </Routes>
      
     </Router>
    </div>
  );
}

export default App;
