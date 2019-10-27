import * as React from 'react';
import {Link} from 'react-router-dom';

import {accountData} from "../../types";

interface Props {
  userData: accountData,
}

const Header = ({userData}: Props) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to={`/`} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        {userData
          ? (
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt={userData.name} width="63" height="63"/>
            </div>
          )
          : (
            <Link to={`/login`} className="user-block__link">Sign in</Link>
          )
        }
      </div>
    </header>
  );
};

export default Header;
