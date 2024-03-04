import React from 'react';
import { NavbarContainer, Logo, BagContainer, BagIcon, BagCount } from './navbar.styled';

const Navbar = ({ bagCount }) => {
  return (
    <NavbarContainer>
      <Logo src="https://res.cloudinary.com/dl26pbek4/image/upload/v1675072763/code_srz4jx.png" alt="logo" />
      <BagContainer>
        <BagIcon src="https://res.cloudinary.com/dl26pbek4/image/upload/v1675075232/bag_1_qns6wh.png" alt="bag" />
        <BagCount>{bagCount}</BagCount>
      </BagContainer>
    </NavbarContainer>
  );
}

export default Navbar;
