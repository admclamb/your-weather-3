import WidgetAirQuality from "../../../components/Widget/WidgetAirQuality/WidgetAirQuality";
import WidgetCurrent from "../../../components/Widget/WidgetCurrent/WidgetCurrent";

const WeatherToday = () => {
  return (
    <div className="weather-grid gap-6 py-6">
      <div>
        <WidgetCurrent />
      </div>
      <div>
        <WidgetAirQuality />
      </div>
    </div>
  );
};

export default WeatherToday;
