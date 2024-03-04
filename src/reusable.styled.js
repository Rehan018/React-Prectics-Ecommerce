import styled from 'styled-components';

export const ListContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px; /* Add a bit more padding */
  background-color: #f9f9f9; /* Add background color */
`;

export const SidebarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px; /* Add a bit more padding */
  background-color: #f9f9f9; /* Add background color */
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  padding: 10px 20px; /* Increase padding for better touch experience */
  color: #fff;
  font-weight: bold;
  background-color: ${props => props.bg || 'red'}; /* Use props to set background color */
  border-radius: 5px; /* Add border radius for a rounded button */
  transition: background-color 0.3s ease; /* Add transition effect */
  
  &:hover {
    background-color: ${props => props.bgHover || 'darkred'}; /* Change background color on hover */
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px; /* Add a bit more padding */
  background-color: #f9f9f9; /* Add background color */
  border-radius: 10px; /* Add border radius */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow */
`;
