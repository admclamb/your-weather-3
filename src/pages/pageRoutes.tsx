import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "../layout/Layout";
import NotFound from "./NotFound/NotFound";

type Props = {};

const PageRoutes = (props: Props) => {
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
