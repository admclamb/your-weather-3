import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
