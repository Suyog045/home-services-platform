import {
  createTheme,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  ThemeProvider,
} from "flowbite-react";
import { Link } from "react-router-dom";

const footerTheme = createTheme({
  root: {
    base: "w-full bg-primary shadow dark:bg-gray-800 md:flex md:items-center md:justify-between rounded",
    container: "w-full py-10 px-6 md:px-32 mt-6",
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-white",
    link: {
      base: "last:mr-0 md:mr-6 me-4 text-",
      href: "hover:bold",
    },
    col: "flex-col space-y-4",
  },
  title: {
    base: "mb-6 text-2xl font-semibold text-white",
  },
});
const FootBar = () => {
  return (
    <Footer theme={footerTheme} container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="text-white text-2xl font-semibold">Home Services</div>
          <FooterLinkGroup className="gap-4 text-white font-medium">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright
          className="text-white"
          href="#"
          by="DAC-STUDENTS"
          year={2025}
        />
      </div>
    </Footer>
  );
};

export default FootBar;
