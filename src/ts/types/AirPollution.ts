export type AirPollution = {
  main: {
    aqi: number;
  };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    nh3: number;
    pm2_5: number;
    pm10: number;
  };
  dt: number;
};
