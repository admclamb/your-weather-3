import { useEffect } from "react";

export const useOutsideAlerter = <T,>(
  ref: React.RefObject<T>,
  executable: (arg0: void) => void,
  allowedTargets: string[]
) => {
  useEffect(() => {
    const handleOutsideClick = (
      event: (this: Document, event: MouseEvent<HTMLElement>) => any
    ) => {
      const target = event.target as HTMLButtonElement;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !allowedTargets.includes(target.id)
      ) {
        executable();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
};
