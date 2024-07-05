"use client"; // This is a client component

import Image from "next/image";
import React from "react";
import Column from "./elements/column";
import Row from "./elements/row";
import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

type Props = {};
const menu = [
  "WHY CASHCORNER?",
  "FAQS",
  "PRIVACY POLICY",
  "TERMS OF USE",
  "CONTACT US",
  "SITEMAP"
]
const cashCornerInfo = [
  "CashCorner does not have the authority to make loan or credit decisions and is not a direct lender or broker.",
  "CashCorner works by matching the customer's loan application with a related lender from the penal based on the information provided.",
  "The application completion at Cashcorner.ca doesn't guarantee approval of a loan.",
  "The loan amount depends upon the lender and the customer's ability to afford it.",
  "The loan approval is subject to the lender's requirement and the customer's current financial status.",
  "Once your loan is approved, the cash can be directly transferred to your account within 5-10 minutes.",
  "The time might vary depending on your bank's policies and clearance procedures.",
  "CashCorner does not charge any fee from customers, but we may receive a small portion as a commission from lenders if a customer gets a successful loan through Cashcorner.ca.",
  "The minimum repayment term is three months.",
  "CashCorner never performs a credit check.",
  "Our lenders might conduct a soft credit search on your application to assess your eligibility for a loan.",
  "Canadian citizens or permanent residents of Canada who are 18 years or above of age and earn a steady income source are eligible to apply.",
  "The information shown on Cashcorner.ca is based on independent research and might vary from other financial institutions.",
  "Take advice from financial experts if you need more clarification on something."
];
const Footer = (props: Props) => {
  const { push } = useRouter();
  return (
    <div>
      <Row className="bg-white shadow-xl p-8 shadow-blue-800 font-bold justify-center flex-wrap border-t" gap={6}>
        {menu.map((item, key) => (
          <div key={key}>
            {item}
          </div>
        ))}
      </Row>

      <div className="bg-[#023a51] text-white py-8 justify-center text-center text-lg">
        <div>©2023, Cashcorner. All Rights Reserved.</div>
      </div>

      {/* contact */}
      <div className="my-container !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>

            <Row className="gap-3 text-xl text-main">
              <div className="text-black font-semibold">
                Follow Us
              </div>
              <FaFacebook />
              <FaYoutube />
              <FaTwitter />
            </Row>
          </div>
          <div>See our 2 reviews on</div>
          <Column gap={3}>
            <div className="text-xl font-semibold">Contact CashCorner</div>
            <Row className="gap-3 !items-start text-gray-400">
              <div className="text-xl text-main">
                <IoLocationOutline />
              </div>
              53 Lake St, St. Catharines, Ontario L2N 7G4, CA</Row>
            <Row className="gap-3 !items-start text-gray-400">
              <div className="text-xl text-main">
                <TfiEmail />
              </div>
              info@cashcorner.ca</Row>
          </Column>
        </div>
      </div>

      <Column gap={6} className="my-container !py-6">
        <div className="text-xl font-semibold">Legal Disclaimer</div>
        {cashCornerInfo.map((item, key) => (
          <p key={key}>{item}</p>
        ))}

      </Column>
    </div>
  );
};

export default Footer;
