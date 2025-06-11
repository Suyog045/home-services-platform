import {
  createTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeProvider,
} from "flowbite-react";
import { SharedButton } from "../Shared/SharedButton";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkFilter = ["Home", "Services", "About-Us", "Contact-Us"];

  return (
      <Navbar fluid rounded className="shadow-2xl ">
        <NavbarBrand className="text-2xl font-semibold">
          Home Services
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <div className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium items-center">
            {navLinkFilter.map((navLink) => (
              <NavLink
                key={navLink}
                to={navLink == "Home" ? "/" : `/${navLink.toLowerCase()}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-primary " : "text-tertiary"
                  } hover:text-primary`
                }
              >
                {navLink}
              </NavLink>
            ))}
          </div>
          <div className="gap-2 flex items-center flex-col md:flex-row">
            <SharedButton label="Login" />
            <SharedButton label="Register" />
          </div>
        </NavbarCollapse>
      </Navbar>
  );
};

export default Header;
