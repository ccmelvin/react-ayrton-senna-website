import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 50px 28px;
  max-width: 100%;
  background-color: var(--footer-bg-color);

  
  `;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 40px auto 0 auto;

  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--footer-text-color);
  cursor: pointer;
  text-decoration: none;

  &:hover{
    color: ${({ primary }) => (primary ? "var(--footer-text-color)" : "var(--footer-hover-color)")};
    transition: all 0.2s ease-in-out;
    transform: scaleX(1.1);
  }

`;

export const WebsiteRights = styled.small`
  margin-bottom: 10px;
  font-size: 16px;
  color: var(--footer-text-color);
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const SocialIconLink = styled.a`
  font-size: 30px;
  color: var(--footer-text-color);

  &:hover{
    color: ${({ primary }) => (primary ? "var(--footer-text-color)" : "var(--footer-hover-color)")};
    transition: all 0.2s ease-in-out;
    transform: scaleX(1.1);
  }
`;
