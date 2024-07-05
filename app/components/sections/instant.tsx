import React from "react";
import Column from "../elements/column";

type Props = {};

const Instant = (props: Props) => {
  return (
    <div className="my-container  !py-24">
      <Column className="gap-6 text-center">
        <div className="text-5xl font-semibold text-center">
          Instant E-Transfer Loans Canada
        </div>
        <div>
          We help thousands of Canadians facing a cash shortage due to medical
          issues, pending bills, or unplanned emergencies. Whether you need cash
          advances, payday loans, or emergency loans, we are here to help you.
          Get fast e-transfer loans in Canada from CashCorner that give you the
          power to access the money in 2-5 minutes* after approval. The
          application process is as simple as making noodles.
        </div>
      </Column>
      <div className="steps text-center mx-auto">
        <div className="step">
          <h4 className="font-semibold text-xl">Apply Online</h4>
          <p>
            Spend a few minutes to complete our simple and easy application
            process.{" "}
          </p>
        </div>
        <div className="step">
          <h4 className="font-semibold text-xl">Fast Approval</h4>
          <p>
            Our lenders review your application and provide instant decisions in
            minutes.
          </p>
        </div>
        <div className="step">
          <h4 className="font-semibold text-xl">Money Arrives</h4>
          <p>
            Once approved, your cash advance will be sent by e-transfer within 5
            minutes. We fund 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instant;
