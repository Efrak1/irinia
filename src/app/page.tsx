'use client'
import React from "react";
import { motion } from "framer-motion";
import { Menu } from "@/components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Application } from "@/components/Application/Application";
import { Order } from "@/components/Order/Order";
import { Swiper } from "@/components/Swiper/Swiper";


export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Menu />
      <AboutUs />
      <Swiper />
      <Order />
      <Application />
      <Footer />
    </motion.div>
  );
}