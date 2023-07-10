import React from "react";
import Navbar from "../components/Navbar/Navbar";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-neutral-100 grow">{children}</main>
    </>
  );
};

export default Layout;
