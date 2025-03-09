import { Box, ModalFlex, ModalTitle } from "./item/styled";
import { Sizes } from "../../widgets/product/ui/styled";
import { Modal } from "./baseModal/BaseModal";
import { Size } from "../../features/size/Size";

type Props = {
  item: {
    name: string;
    slug: string;
    price: number;
    oldPrice?: number;
    sizes: string[];
    materials: {
      name: string;
      percentage: string;
    }[];
    description: string;
    image: string;
    recommendations?: {
      name: string;
      image: string;
    }[];
  };
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

export const SizesModal = ({ isOpen, onClose, item, setIsOpen }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} minWidth={"500px"}>
    <ModalFlex>
      <Box>
        <ModalTitle>Выберите размер</ModalTitle>
      </Box>
      <Sizes>
        {item?.sizes?.map((size, index) => (
          <Size key={index} size={size.toUpperCase()} setIsOpen={setIsOpen} />
        ))}
      </Sizes>
    </ModalFlex>
  </Modal>
);
