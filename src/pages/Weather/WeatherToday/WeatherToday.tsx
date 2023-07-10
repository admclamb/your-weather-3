import WidgetCurrent from "../../../components/Widget/WidgetCurrent/WidgetCurrent";

const WeatherToday = () => {
  return (
    <div className="weather-grid gap-6 py-6">
      <WidgetCurrent />
      <WidgetCurrent />
    </div>
  );
};

export default WeatherToday;
