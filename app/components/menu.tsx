"use client"; // This is a client component

import React from "react";
import Row from "./elements/row";
import Image from "next/image";
import { useRouter } from "next/dist/client/components/navigation";
import Link from "next/link";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { websiteConfig } from "@/websiteConfig";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

type Props = {};

const menus = [
  {
    title: "WHY CASHCORNER?",
    url: "/",
  },
  {
    title: "HOW IT WORKS?",
    url: "/",
  },
  {
    title: "FAQS",
    url: "/",
  },
  {
    title: "BLOG",
    url: "/",
  },
];
const Menus = (props: Props) => {
  const { push } = useRouter();

  return (
    <div className="bg-white p-3 ">
      <Row
        className="  items-center w-full justify-between
     !py-4 "
      >
        <Row gap={3} className="">
          <RiMoneyDollarBoxFill className=" text-2xl  lg:text-5xl  text-main" />
          <div className="text-3xl font-semibold">{websiteConfig.title1}</div>
        </Row>
        <Row className=" gap-6 hidden lg:flex">
          {menus.map((item, key) => (
            <div key={key}>
              <Link
                href={item.url}
                key={key}
                className="font-semibold cursor-pointer transition-all hover:opacity-50"
              >
                {item.title}
              </Link>
            </div>
          ))}
          <a href="/form-loan">
            <button
              onClick={() => push("/form-loan")}
              className="bg-main text-white py-5 px-8 rounded-full font-medium uppercase shadow-md hover:opacity-80"
            >
              Apply Now
            </button>
          </a>
        </Row>
      </Row>
    </div>
  );
};

export default Menus;
