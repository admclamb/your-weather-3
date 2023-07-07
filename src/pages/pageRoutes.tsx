import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
