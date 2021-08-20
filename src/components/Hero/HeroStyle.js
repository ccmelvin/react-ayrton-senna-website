import styled, { css } from "styled-components/macro";
import { GrNext, GrPrevious } from "react-icons/gr";

export const Section = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  
 
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 1;
    position: absolute;
    z-index: 2;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

export const Image = styled.img`
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: 70% 20%;
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 40%;
  margin: -180px 0 0 100px;
  padding: 25px;
  max-width: 750px;
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: var(--main-gray-color);
  background-color: rgba(0,0,0,.5);
  -webkit-transform: translate3d(0,0,1.5);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -o-transform: translate3d(0,0,0);
  opacity: 3;
  z-index: 10;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 0.7rem;
    color: var(--main-hover-color);
    
  }

  p {
    margin-bottom: 1.2rem;
    color: var(--main-hover-color);
    
  }
  section {
    margin-bottom: 0.7rem;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

export const arrowButtons = css`
  margin-right: 1rem;
  padding: 10px;
  width: 50px;
  height: 50px;
  background: var(--main-gray-color);
  border-radius: 50px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  &:hover {
    margin-bottom: 1.5px;
    background: var(--main-hover-color);
    transition: all 0.2s ease-in-out;
    transform: scaleX(1.1);
  }
`;

export const SliderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50px;
  right: 50px;
  position: absolute;
  z-index: 10;
`;

export const PrevArrow = styled(GrPrevious)`
  ${arrowButtons}
`;

export const NextArrow = styled(GrNext)`
  ${arrowButtons}
`;