import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Routes from "./Routes/Routes";
import { ThemeConfig } from "flowbite-react";
import { ModalWrapper } from "./Components/AuthPage/Wrapper/ModalWrapper";
import { useEffect, useState } from "react";
import Preloader from "./Components/Shared/PreLoader";
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
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App
