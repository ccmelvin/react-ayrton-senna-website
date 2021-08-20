import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ lightBg }) => (lightBg ? 'var(--main-light-color)' : 'var(--main-lgray-color)')};
  
  `;
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  height: 100%;
  width: 100%;
  padding: 2.5rem calc((100vw - 1600px) / 2);
  font-size: 18px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.6;
  
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1{
      font-size: 2.5rem;
      color: var(--main-emerald-color);
      margin-bottom: 1rem;
      font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p{
      margin-bottom: 2rem;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover ;
    @media screen and (max-width: 768px){
      width: 90%;
      height: 90%;
    }
  }
`;
export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  order: ${({ reverse }) => (reverse ? "1" : "2")};


  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;
