import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "../layout/Layout";
import NotFound from "./NotFound/NotFound";

const PageRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default PageRoutes;
