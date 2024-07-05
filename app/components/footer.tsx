"use client"; // This is a client component

import Image from "next/image";
import React from "react";
import Column from "./elements/column";
import Row from "./elements/row";
import { useRouter } from "next/navigation";

type Props = {};

const Footer = (props: Props) => {
  const { push } = useRouter();
  return (
    <div className="bg-secondary">
      <div className="my-container ">
        <div className="grid grid-cols-1 md:grid-cols-4 !py-12  border-gray gap-6">
          <Column gap={3}>
            <div className="font-bold">Home</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Credit Authorization</div>
          </Column>
          <Column gap={3}>
            <div className="font-bold">Contact</div>
            <div>Rates and Fees</div>
            <div>Unsubscribe</div>
            <div>Do Not Sell My Personal Information</div>
          </Column>
          <Column gap={3}>
            <div className="font-bold">Marketing Practices</div>
            <div>Responsible Lending</div>
            <div>Lending Goals</div>
          </Column>
          <Column gap={3}>
            <div className="font-bold">Email:</div>
            <div>contact@techyreserve.com</div>
          </Column>
        </div>
        <Column gap={6} className="text-xs">
          <p>
            Disclaimer: Techyreserve is not an offer or solicitation to lend. We
            do not make any loan or credit decisions and are not
            representatives, brokers or agents of any lender. Participating
            lenders offer loans from $200 up to $5000. Not all lenders can offer
            you amounts up to $5000. Our service is not available in all states.
            Submission of a request through this website does not guarantee that
            you will receive a loan offer or an offer you’ll be satisfied with.
            Funds transfer time may vary depending on your lender and/or
            financial institution. If you have any questions about your loan,
            please contact your lеndеr directly. Credit checks may be performed
            with the three reporting credit bureaus: Experian, Equifax, and
            TransUnion. Submission of a request means you are authorizing the
            lenders to check your creditworthiness and your personal details.
            This service is not a solicitation for loan products and does not
            constitute a loan offer for any loan products that are prohibited by
            state law. This service is void where prohibited
          </p>
          <p>
            State Availability: Not all lenders from our system operate in all
            US states. Residents of some US states may not be eligible for loan
            products in accordance with their legislation. By selecting your
            State at the start of our loan offer process, you shall be informed
            of any limitations regarding obtaining a loan if you reside in
            individual US states. This website collects personal information and
            transfers it to its third-party partners. The website contains links
            to third-party websites. Accessing them may result in a commission.
            Please note that personal loans should not be treated as financial
            cure-it-all. If you have major budget difficulties, consult
            specialists first.
          </p>
        </Column>

        {/* copy */}
        <div className="py-6 text-center text-sm">
          © 2024 Copyright <span className="font-bold">Starpayloans</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
