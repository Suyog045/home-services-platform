import Header from "../components/Home/Header";
import { Outlet } from "react-router-dom";
import FootBar from "../components/Home/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div>
          <Outlet />
      </div>
      <div>
          <FootBar />
      </div>
    </div>
  );
};

export default RootLayout;
