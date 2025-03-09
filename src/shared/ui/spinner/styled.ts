import styled, { keyframes } from "styled-components";

export const bounce = keyframes` 0% {
                                     transform: translate(0px, -10px);
                                 }

                                     40% {
                                         width: 0;
                                         height: 2px;
                                         transform: translate(0px, 40px) scale(1.7);
                                     }

                                     100% {
                                         height: 20px;
                                         transform: translate(0px, -20px);
                                     }`;
export const StyledDots = styled.div`
  display: flex;
  gap: 50px;
  padding-top: 50px;
  align-items: center;
  justify-content: center;
`;
export const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 20px;
  transform: translate(0px, -40px);
  animation: ${bounce} 1s infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
