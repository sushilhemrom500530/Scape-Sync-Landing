import React from "react";
import Logo from "./components/logo";
import logoIcon from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] flex items-center justify-between py-4 bg-transparent">
      <Logo src={logoIcon} />
      <div></div>
      <button className="btn">Get Started</button>
    </div>
  );
}
