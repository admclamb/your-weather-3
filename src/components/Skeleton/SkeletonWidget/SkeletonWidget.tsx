import Card from "../../Card/Card";

type Props = {
  width?: string;
  height?: string;
};

const SkeletonWidget = ({ width = "w-full", height = "h-44" }: Props) => {
  return <Card className={`${width} ${height} shine`}></Card>;
};

export default SkeletonWidget;
