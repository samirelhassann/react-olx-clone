import { BrowserRouter } from "react-router-dom";

import MainRoutes from "./pages/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
