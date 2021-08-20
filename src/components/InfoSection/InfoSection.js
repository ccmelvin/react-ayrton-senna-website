import React, { useState } from "react";
import { Button } from "../Buttons/Button";

import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
} from "../InfoSection/InfoSectionStyle";

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  buttonLabel,
  reverse,
  image,
}) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Section id="home">
        <Container>
          <ColumnLeft>
            <h1> {heading} </h1>
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
        </Container>
      </Section>
    </>
  );
};

export default InfoSection;
