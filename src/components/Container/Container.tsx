import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div className={`${className && className + " "}max-w-5xl mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
