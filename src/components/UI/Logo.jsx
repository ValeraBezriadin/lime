import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/static/logo.svg";

const Logo = () => {
  return (
    <>
      <Link className={"logo"} href={"/"}>
        <Image src={logo} width={107} height={71} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
