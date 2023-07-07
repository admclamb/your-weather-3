import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./Home/Home";

const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
