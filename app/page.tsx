"use client"; // This is a client component
import Banner from "./components/sections/banner";
import GetYourLoan from "./components/sections/get-your-loan";
import Why from "./components/sections/why";
import Price from "./components/sections/price";
import FAQ from "./components/sections/faq";
import LoanForm from "./components/form-info";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Advantages from "./components/sections/advantages";
import HowItWork from "./components/sections/how-it-work";
import What from "./components/sections/what";
import Instant from "./components/sections/instant";
import Difference from "./components/sections/difference";

export default function Home() {
  const reload = () => {
    window.location.replace("/");
  };
  useEffect(() => {
    // reload()
  }, []);

  return (
    <div>
      <Banner />
      <Instant />
      <Why />
      <Difference />
      <FAQ />
    </div>
  );
}
