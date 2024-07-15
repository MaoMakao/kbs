import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #282c34;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavStack = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 1rem;
`;
