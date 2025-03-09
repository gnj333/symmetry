import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<{ minWidth?: string }>`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  min-width: ${({ minWidth }) => minWidth || "300px"};
  max-width: 90%;
  z-index: 1001;
  transform: scale(0.9);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 30px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
