import { ColorModeContext } from "./theme";
import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/index.jsx";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
// import Partners from "./scenes/partners/Partners";
// import Line from "./scenes/line/Line";
// import Pie from "./scenes/pie/Pie";
// import Bar from "./scenes/bar/Bar";
// import Geography from "./scenes/geography/Geography";

// import Orders from './scenes/orders/Orders';
// import Profile from './scenes/profile/Profile';
// import Calendar from './scenes/calendar/Calendar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
            {/* <Route path="/partners" element={<Partners />} /> */}
            {/* <Route path="/orders" element={<Orders />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
            {/* <Route path="/logout" element={<Logout />} /> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
