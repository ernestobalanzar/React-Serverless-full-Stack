import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
`;

export const StyledNavBrand = styled.div`
  font-size: 1.4rem;
  & > a {
    text-decoration: none;
  }
`;

export const StyleNavItems = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`;

export const StyleLinkButton = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #e16365;
  }
`;

export const Accent = styled.span`
  color: #e16365;
`;
