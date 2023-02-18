import React from "react";
import { quotes } from "../public/assets";
import Image from "next/image";
const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr:-10 sm:mr-5 mr-0 my-5 feedback-card">
      <Image src={quotes} alt="quotes" className="w-[28px] " />
      <p className="text-font-poppins text-white font-nomral text-[18px] leading-[32px] my-10">
        {content}
      </p>

      <div className="flex flex-row justify-start items-center ">
        <Image
          src={img}
          alt="profile"
          className="w-[48px] h-[48px] rounded-full mr-5  "
        />

        <div className="flex flex-col">
          <h4 className="text-font-poppins text-white font-semibold text-[20px] leading-[32px] ">
            {name}
          </h4>
          <p className="text-font-poppins text-dimWhite font-nomral text-[18px] leading-[32px] ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
