import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5%; 
`;

export const Logo = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const BagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BagIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const BagCount = styled.strong`
  font-weight: bold;
  color: #333333;
`;
