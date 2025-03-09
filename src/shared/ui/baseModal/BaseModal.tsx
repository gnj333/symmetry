import React, { useEffect } from "react";
import { CloseButton, ModalContent, Overlay } from "./styled";
import { IconWrapper } from "../../../entities/header/styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  minWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  minWidth,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `23px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <ModalContent minWidth={minWidth} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IconWrapper src={"/icons/close.svg"} />
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
};
