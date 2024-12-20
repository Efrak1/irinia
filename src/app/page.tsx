'use client'
import React from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/Head/Logo";
import { Menu } from "@/components/Menu/Menu";
import { Body } from "../components/Body/Body";
import { Footer } from "../components/Footer/Footer";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Logo />
      <Menu />
      <Body />
      <Footer />
    </motion.div>
  );
}