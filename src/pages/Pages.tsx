import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Search from "./Search/Search";

const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="search-locations" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
