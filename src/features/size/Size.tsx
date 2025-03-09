import styled from "@emotion/styled";
import { Typography } from "../../shared/ui/styled";
import { useState } from "react";
import { selectSize } from "../news/model";
import { reload } from "../../entities/header/model";
import { scrollToSymmetry } from "../../shared/refs/Refs";

export const Sized = styled(Typography)<{ isSelected: boolean }>`
  font-size: 23px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isSelected }) => (isSelected ? "scale(1.3)" : "none")};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  &:hover {
    transform: scale(1.3);
    font-weight: bold;
  }
`;

type Props = {
  size: string;
  setIsOpen?: (isOpen: boolean) => void;
  isNeedAddToCart?: boolean;
};

export const Size = ({ size, setIsOpen, isNeedAddToCart = true }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = (size: string) => {
    setIsSelected((prev) => !prev);
    if (isNeedAddToCart) {
      selectSize(size);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setIsOpen !== undefined && setIsOpen(false);
    reload();
    scrollToSymmetry();
  };
  return (
    <Sized isSelected={isSelected} onClick={() => handleClick(size)}>
      {size}
    </Sized>
  );
};
