import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/peplum">Peplum</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
