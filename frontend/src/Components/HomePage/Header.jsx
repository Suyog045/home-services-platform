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

const customTheme = createTheme(
  {
  navbar: {
    link: {
      active: {
        on: "text-primary border-b-2 border-primary",
        off: "text-secondary",
      },
    },
  },
}
)
const Header = () => {
  const navLinkFilter = ["Home", "Services", "About-Us", "Contact-Us"];

  return (
      <Navbar theme={customTheme} className="fixed w-full z-50 rounded md:rounded-4xl transition-transform duration-300 mt-3 shadow-2xl ">
        <NavbarBrand className="text-2xl font-semibold text-center">
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
          <div className="mt-3 md:mt-0 gap-2 flex items-center flex-col md:flex-row">
            <SharedButton label="Login" />
            <SharedButton label="Register" />
          </div>
        </NavbarCollapse>
        </Navbar>
  );
};

export default Header;
