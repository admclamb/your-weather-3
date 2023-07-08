import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";

const Weather = () => {
  const { weather } = useSelector((state) => state.weather);
  const { location } = useSelector((state) => state.location);
  return (
    <>
      <Container className="mx-auto">
        <section></section>
        <aside></aside>
      </Container>
    </>
  );
};

export default Weather;
