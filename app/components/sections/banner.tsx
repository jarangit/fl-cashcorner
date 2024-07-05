import React from "react";
import Row from "../elements/row";
import Image from "next/image";
import Column from "../elements/column";
import { GiCheckMark } from "react-icons/gi";

type Props = {};

const list = [
  "No credit check",
  "1 minute application form",
  "Get your money today",
  "Repay in 90 to 120 days",
  "$250 to $1500 instalment loans",
];

const Banner = (props: Props) => {
  return (
    <div className="blue-box">
      <Column gap={6} className="my-container items-center  lg:text-white w-full !py-24 ">
        <div className=" text-2xl  lg:text-5xl  font-semibold">Need Cash To Pay Tomorrow?</div>
        <p>
          CashCorner have options that offer quick funding in just few minutes!
        </p>
        <div className="border rounded-3xl shadow-lg overflow-hidden bg-white p-6">
          <div className="w-full" id={"_lg_form_"}></div>
        </div>
      </Column>
    </div>
  );
};

export default Banner;
