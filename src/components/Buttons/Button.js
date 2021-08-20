import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  max-width: 200px;
  padding: ${({ large }) => (large ? "18px 40px" : "14px 24px")};
  color: var(--btn-text-color);
  background: var(--btn-bg-color);
  text-transform: uppercase;
  font-size: ${({ large }) => (large ? "20px" : "18px")};
  font-weight: ${({ large }) => (large ? "bold" : "normal")};
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;

  &:hover {
    color: var(--btn-hover-color);
    background-color: var(--btn-active-color);
    transform: translateX(3px);
    transition: all 0.2s ease-in-out;
  }
`;
