import { useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLDivElement | HTMLInputElement>(
  callback: () => void,
) => {
  const refElement = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refElement.current &&
        !refElement.current.contains(event.target as HTMLDivElement)
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refElement, callback]);

  return { refElement };
};
