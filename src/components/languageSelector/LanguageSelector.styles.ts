import styled from 'styled-components';

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: black;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const MenuItem = styled.option`
  padding: 10px;
  font-size: 16px;
  color: black;
`;
