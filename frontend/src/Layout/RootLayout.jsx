import Header from "../Components/HomePage/Header";
import { Outlet } from "react-router-dom";
import FootBar from "../Components/HomePage/Footer";

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
