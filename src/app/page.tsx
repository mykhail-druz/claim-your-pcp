"use client";
import {
  Faq,
  HeroBanner,
  GetAdvice,
  Featured,
  SolveProblem,
  Scandal,
  YouCould,
} from "@/components";
import { Layout } from "@/layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <HeroBanner />
      <YouCould />
      <Scandal />
      <SolveProblem />
      <Featured />
      <Faq />
      <GetAdvice />
    </Layout>
  );
}
