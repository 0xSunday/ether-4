import React from "react";
import { apple, bill, google } from "../public/assets";
import styles, { layout } from "../Styles";
import { quotes } from "../public/assets";
import Image from "next/image";
const Billings = () => (
  <section
    id="#product"
    className="flex md:flex-row flex-col-reverse sm:py-16 py-10 "
  >
    <div
      className={
        "flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative"
      }
    >
      <Image src={bill} alt="bill" className={`w-[100%] h-[100%] z-10 `} />
      <div className="absolute z-5 -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-0 -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>

    <div className={`${layout.sectionInfo} flex `}>
      <h2 className={`${styles.heading2} text-[40px]`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex   flex-row justify-around items-center mt-14 ">
        <Image src={apple} alt="apple" className="mr-4 w-28  " />
        <Image src={google} alt="google" className="w-28 " />
      </div>
    </div>
  </section>
);

export default Billings;
