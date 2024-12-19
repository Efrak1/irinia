import React from "react";
import { Logo } from "@/components/Head/Logo";
import { Menu } from "@/components/Menu/Menu";
import { Body } from "../components/Body/Body";
import { Footer } from "../components/Footer/Footer";

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