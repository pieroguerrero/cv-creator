import React, { useRef } from "react";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { CallToAction } from "./CallToAction";

/**
 *
 * @param {{onStartNow():void}} param0
 * @returns
 */
const LandingPage = ({ onStartNow }) => {
  const refDivFeatures = useRef(null);

  const onLearnMore = () => {
    if (refDivFeatures.current) {
      console.log("Entra a Learn More Click");
      refDivFeatures.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Hero onStartNow={onStartNow} onLearnMore={onLearnMore} />
      <div ref={refDivFeatures}>
        <Features />
      </div>
      <CallToAction onStartNow={onStartNow} />
    </div>
  );
};

export { LandingPage };
