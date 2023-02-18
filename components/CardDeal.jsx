import React from "react";
import Image from "next/image";
import { card } from "../public/assets";
import styles, { layout } from "../Styles";
import Button from "./Button";
const CardDeal = () => (
  <section className={`${layout.section} sm:py-16 py-10`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-8" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="card" className="w-[100%] h-[100%] z-10" />
      <div className="absolute z-5 right-1/6 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-0 right-1/6 top-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>
  </section>
);

export default CardDeal;
