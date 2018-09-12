import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderNav = styled.header`
  color: #ffffff;
  background: #00519b;
  padding: 10px 20px;
  border-bottom: 2px solid #0267b2;

  ul {
    display: flex;
    justify-content: space-between;
  }

  a {
    padding: 10px 20px;
    color: #ffffff;
    font-weight: bold;
  }
  a:hover {
    background: #0267b2;
  }
  a.active {
    background: #0267b2;
  }
`;

const Header = () => (
  <HeaderNav>
    <nav>
      <ul>
        <li>
          <Link to="/">Real Oviedo</Link>
        </li>
        <li>
          <NavLink to="/users">Plantilla</NavLink>
        </li>
        <li>
          <NavLink to="/about">Historia</NavLink>
        </li>
      </ul>
    </nav>
  </HeaderNav>
);

export default Header;
