import styled from "@emotion/styled";

export const RefToCatalog = styled.div`
  height: 1;
`;

export const RefToDelivery = styled.div`
  height: 1;
`;

export const RefToAboutUs = styled.div`
  height: 1px;
  position: absolute;
  top: 600px;
`;

export const scrollToCatalog = () => {
  setTimeout(() => {
    const catalogElement = document.getElementById("news");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 1);
};

export const scrollToAboutUs = () => {
  setTimeout(() => {
    const aboutUs = document.getElementById("about");
    if (aboutUs) {
      aboutUs.scrollIntoView({ behavior: "smooth" });
    }
  }, 1);
};

export const scrollToDelivery = () => {
  setTimeout(() => {
    const delivery = document.getElementById("delivery");
    if (delivery) {
      delivery.scrollIntoView({ behavior: "smooth" });
    }
  }, 1);
};

export const scrollToSymmetry = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
