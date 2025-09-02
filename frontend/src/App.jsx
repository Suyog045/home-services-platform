import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { ThemeConfig } from "flowbite-react";
import { useEffect, useState } from "react";
import Preloader from "./components/Shared/PreLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <ThemeConfig dark={false} />
      <RouterProvider router={Routes} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        className="!mt-16"
      />
    </>
  );
}

export default App;
