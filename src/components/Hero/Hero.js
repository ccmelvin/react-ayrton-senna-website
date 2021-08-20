import React, { useState, useRef, useEffect } from "react";


import {
  Section,
  Wrapper,
  Slide,
  Slider,
  Image,
  Content,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from "../Hero/HeroStyle";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   };
  //   timeout.current = setTimeout(nextSlide, 3000);
  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.lenght <= 0) {
    return null;
  }

  return (
    <Section>
      <Wrapper>
        {slides.map((slide, index) => {
          return (
            <Slide key={index}>
              {index === current && (
                <Slider>
                  <Image src={slide.image} alt={slide.alt} />
                  <Content>
                    <h1>{slide.title}</h1>
                    <p>{slide.years}</p>
                    <section>{slide.titles}</section>
                    <section>{slide.description}</section>
                    <section>{slide.descriptionTwo}</section>
                  </Content>
                </Slider>
              )}
            </Slide>
          );
        })}
      </Wrapper>
      <SliderButtons>
        <PrevArrow onClick={prevSlide} />
        <NextArrow onClick={nextSlide} />
      </SliderButtons>
    </Section>
  );
};

export default Hero;
