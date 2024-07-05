import Image from "next/image";
import React from "react";
import Column from "../elements/column";

type Props = {};

const What = (props: Props) => {
  return (
    <div>
      <Column gap={12} className="my-container !py-24">
        <div className="text-center font-medium text-xl text-main">
          WHAT MAKES US DIFFERENT
        </div>
        <div className=" text-2xl  lg:text-5xl  font-medium text-center max-w-[700px] mx-auto">
          Techyreserve Is On Guard Of Your Comfort And Time
        </div>

        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl ">
          <Image
            src={"/images/image3.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Column>
    </div>
  );
};

export default What;
