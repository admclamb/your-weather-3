import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Search from "./Search/Search";
import Weather from "./Weather/Weather";
import WeatherHourly from "./Weather/WeatherHourly/WeatherHourly";
import WeatherDaily from "./Weather/WeatherDaily/WeatherDaily";
import WeatherToday from "./Weather/WeatherToday/WeatherToday";

const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="search-locations" element={<Search />} />
        <Route path="weather" element={<Weather />}>
          <Route index element={<WeatherToday />} />
          <Route path="hourly" element={<WeatherHourly />} />
          <Route path="daily" element={<WeatherDaily />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
