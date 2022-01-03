import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavBrand,
  StyleNavItems,
  StyleLinkButton,
  Accent,
} from "../styled/NavBar";

export default function NavBar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to="/">
          Learn.Build<Accent>Type.</Accent>
        </Link>
      </StyledNavBrand>
      <StyleNavItems>
        <li>
          <StyleLinkButton to="/">Home</StyleLinkButton>
        </li>
        <li>
          <StyleLinkButton to="/highScores">HighScores</StyleLinkButton>
        </li>
      </StyleNavItems>
    </StyledNavbar>
  );
}
