import React from "react";
import FeedBackCard from "./FeedBackCard";
import styles from "../Styles";
import { feedback } from "../Data";
const Testimonial = () => (
  <section id="client" className="sm:py-16 py-10 ">
    <div className=" absolute z-0 w-[60%] h-[60%] -left-[40%]  rounded-full blue__gradient"></div>

    <div className="flex justify-center items-center flex-1 w-full flex-col sm:flex-row sm:justify-between ">
      <h1 className={`${styles.heading2} flex sm:justify-center `}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>
      <div className="w-full mt-6 sm:mt-0 flex sm:justify-center   pb-3">
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex my-5 justify-center flex-col sm:flex-row items-start feedback-container relative z-10">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export default Testimonial;
