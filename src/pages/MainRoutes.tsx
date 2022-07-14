import { useRoutes } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";

const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default MainRoutes;
