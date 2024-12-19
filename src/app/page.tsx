import React from "react";
import { Logo } from "@/app/Head/Logo";
import { Menu } from "@/app/Menu/Menu";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";

export default function Page() {
  return (
    <>
    <Logo/>
    <Menu/>
    <Body/>
    <Footer/>
    </>
  );
}