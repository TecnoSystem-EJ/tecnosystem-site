import React from "react";
import { PrismicLink } from "@prismicio/react";

interface props {
  ulStyles: string;
  liStyles: string;
  handleNavClick?: () => void;
  navigation: any;
}

const NavBarListMobile = ({
  ulStyles,
  liStyles,
  handleNavClick,
  navigation,
}: props) => {
  return (
    <ul className={ulStyles}>
      {navigation.navigation.map(({ label, link }: any, index: number) => {
        return (
          <li key={index} className={liStyles} onClick={handleNavClick}>
            <PrismicLink field={link}>{label}</PrismicLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarListMobile;
