type Props = {
  icon: string;
  description: string;
  size?: string;
};

const Icon = ({ icon, description, size = "2x" }: Props) => {
  return (
    icon && (
      <img
        src={`http://openweathermap.org/img/wn/${icon}@${size}.png`}
        alt={description}
      />
    )
  );
};

export default Icon;
