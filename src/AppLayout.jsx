import { useState } from "react";
import { Outlet } from "react-router";

import NavBar from "./components/NavBar";

const AppLayout = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="background min-h-screen"
      data-theme={isDark ? "dark" : "light"}
    >
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </div>
  );
};

export default AppLayout;
