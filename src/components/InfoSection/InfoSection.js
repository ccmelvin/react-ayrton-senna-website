import React, { useState } from "react";
import { Button } from "../Buttons/Button";

import {
  Section,
  InfoContainer,
  ColumnLeft,
  ColumnRight,
} from "../InfoSection/InfoSectionStyle";

const InfoSection = ({
  id,
  heading,
  description,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  buttonLabel,
  reverse,
  image,
  lightBg
}) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Section id={id} lightBg={lightBg}>
        <InfoContainer>
          <ColumnLeft reverse={reverse}>
            <h1> {heading} </h1>
            <p>{description}</p>
            <p> {paragraphOne} </p> <p> {paragraphTwo} </p>
            <p>{paragraphThree}</p>
            <Button
              to="home"
              primary="true"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-70}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnRight>
        </InfoContainer>
      </Section>
    </>
  );
};

export default InfoSection;
