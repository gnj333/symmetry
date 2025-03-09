import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

const portalRootClassName = "portal-root";

export const Portal = ({ children }: Props) => {
  const mount = document.getElementById(portalRootClassName);
  const el = document.createElement("div");

  useEffect(() => {
    if (!mount) {
      //eslint-disable-next-line
      console.error(`div с классом ${portalRootClassName}  не найден `);
    }
    mount?.appendChild(el);

    return () => {
      mount?.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};
