import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Container = styled.div`
position: fixed;
z-index: 999;
width: 500px;
height: 500px;
background: var(--main-emerald-color);
color: #e7e5df;
display: flex;
justify-content: center;
align-content: flex-start;
top: 0;
left: 0;
transition: 0.2s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
top: ${({ isOpen }) => (isOpen ? "0" : "1")};
`;
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;
export const CloseIcon = styled(GrClose)`

`;

export const DropdownWrapper = styled.div``;

export const Menu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 2.5rem;

@media screen and (max-width: 480px) {
  grid-template-rows: repeat(4, 60px);
}
`;

export const DropdownLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
color: var(--nav-text-color);
font-size: 1.4rem;
cursor: pointer;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;

&:hover {
  border-bottom: 1px solid var(--nav-hover-color);
}
`;
export const Btn = styled.div`
display: flex;
justify-content: center;
`;
