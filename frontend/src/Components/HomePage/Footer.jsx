import {
  createTheme,
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { Link } from "react-router-dom";

const footerTheme = createTheme({
  root: {
    base: "w-full bg-white shadow md:flex md:items-center md:justify-between dark:bg-primary rounded-none",
    container: "w-full p-6",
    bgDark: "bg-primary",
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-white",
    link: {
      base: "last:mr-0 md:mr-6 me-4 text-white",
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
        <div className="w-full flex flex-col items-center md:gap-0 gap-2 md:flex-row justify-center md:justify-between">
          <div className="text-white text-2xl font-semibold">Home<span className="text-secondary">Mate</span></div>
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
