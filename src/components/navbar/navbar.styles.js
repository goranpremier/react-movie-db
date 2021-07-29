import styled from "styled-components";
import { ReactComponent as TheMovieDBLogo } from "../../assets/tmdb-logo.svg";

export const NavbarWrapper = styled.nav`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const DesktopMenu = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }

  a {
    padding: 8px 10px;
    border-radius: 3px;
    background: transparent;
    color: #fff;
    text-decoration: none;
    margin-right: 5px;
    font-weight: 700;
    font-size: 14px;
    transition: all ease-in 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.secondaryText};
    }
  }
`;

export const StyledMovieDBLogo = styled(TheMovieDBLogo)`
  height: 40px;
  margin-right: 20px;
`;

export const MobileMenuIcon = styled.button`
  display: none;
  height: 40px;
  width: 40px;
  cursor: pointer;
  position: relative;
  z-index: 200;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px;
  background: transparent;
  color: #fff;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }

  > svg {
    height: 30px;
  }
`;

export const MobilePopover = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileMenu = styled.div`
  width: 100%;
  border: 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.secondaryText};
    }
  }
`;
