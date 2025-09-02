import {
  Button,
  createTheme,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeProvider,
} from "flowbite-react";
import { SharedButton } from "../Shared/SharedButton";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthModal } from "../../hooks/useAuthModal";
import { useAuth } from "../../providers/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePartnerAuth } from "../../providers/PartnerAuthContext";
import { useBooking } from "../../hooks/useBooking";
import { CgProfile } from "react-icons/cg";

const customTheme = createTheme({
  navbar: {
    link: {
      active: {
        on: "text-primary border-b-2 border-primary",
        off: "text-secondary",
      },
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-primary md:hidden",
    icon: "h-6 w-6 shrink-0 text-primary",
    title: "sr-only",
  },
});
const Header = () => {
  const { setModalType } = useAuthModal();
  const navLinkFilter = ["Home", "Services", "About-Us", "Contact-Us"];
  const { user, logout } = useAuth();
  const { partner, logout: partnerLogout } = usePartnerAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useBooking();

  const isPartnerRoute = location.pathname.startsWith("/partner");

  const hideHeaderRoutes = ["/partner/dashboard"];

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  if (shouldHideHeader) return null;

  const handleLogout = () => {
    if (partner) {
      partnerLogout();
      navigate("/partner");
    } else {
      logout();
      navigate("/");
    }
    clearCart();
    toast.success("Logged out successfully");
  };
  return (
    <Navbar
      theme={customTheme}
      className="fixed w-full z-50 transition-transform duration-300 rounded-b-md shadow-2xl "
    >
      <NavbarBrand className="text-2xl font-semibold text-center">
        Home<span className="text-secondary">Mate</span>{" "}
        {location.pathname.startsWith("/partner") && (
          <sup className="text-sm mx-2">Partner</sup>
        )}
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
          {!location.pathname.startsWith("/partner") && !user && !partner && (
            <div className="flex flex-col gap-1">
              <Link
                to={"/partner"}
                className="text-primary hover:text-secondary-hover"
              >
                Become A Partner
              </Link>
              <div className="w-1/2 h-0.5 bg-secondary" />
            </div>
          )}
          {user || partner ? (
            <>
              <Dropdown
                label={
                  <CgProfile className="text-2xl text-primary cursor-pointer" />
                }
                inline
              >
                <DropdownItem
                  onClick={() =>
                    navigate(partner ? "/partner/dashboard" : "/user-profile")
                  }
                >
                  {partner ? "Partner Dashboard" : "Profile"}
                </DropdownItem>
                <DropdownItem onClick={handleLogout} className="text-red-500">
                  Logout
                </DropdownItem>
              </Dropdown>
            </>
          ) : (
            <>
              <SharedButton setModalType={setModalType} label="Login" />
              {!isPartnerRoute ? (
                <SharedButton setModalType={setModalType} label="Register" />
              ) : (
                <Link to="/partner/register">
                  <Button className="bg-secondary rounded-4xl hover:bg-secondary cursor-pointer w-24 text-nowrap font-medium">
                    Register
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
