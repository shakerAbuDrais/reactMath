import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import './Header.css';

const header = () => (
  <div>
    <nav className="header-nav">
      <h1 className="title"> Math Magicians </h1>
      <ul className="nav-ul">
        <li>
          <Link to="/Home"> Home </Link>
        </li>
        <li className="mid-li">
          <Link to="/Calculator"> Calculator </Link>
        </li>
        <li>
          <Link to="/Quote"> Quote </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </div>
);

export default header;
