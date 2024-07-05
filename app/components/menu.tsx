"use client"; // This is a client component

import React from "react";
import Row from "./elements/row";
import Image from "next/image";
import { useRouter } from "next/dist/client/components/navigation";
import Link from "next/link";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

type Props = {};

const menus = [
  {
    title: "Advantages",
    url: "/",
  },
  {
    title: "How It Works",
    url: "/",
  },
  {
    title: "Why Us",
    url: "/",
  },
  {
    title: "FAQ",
    url: "/",
  },
];
const Menus = (props: Props) => {
  const { push } = useRouter();

  return (
    <div className="bg-secondary ">
      <Row
        className="   my-container items-center w-full justify-between
     !py-4 "
      >
        <Row gap={3} className="gap-8 hidden md:flex">
          <BsFillCreditCard2FrontFill className="text-5xl text-main" />
          {menus.map((item, key) => (
            <Link
              href={item.url}
              key={key}
              className="font-medium cursor-pointer transition-all hover:opacity-50"
            >
              {item.title}
            </Link>
          ))}
        </Row>
        <div>
          <a href="/form-loan">
            <button
              onClick={() => push("/form-loan")}
              className="bg-main text-white p-2 px-4 rounded-md font-medium"
            >
              Get Started
            </button>
          </a>
        </div>
      </Row>
    </div>
  );
};

export default Menus;
