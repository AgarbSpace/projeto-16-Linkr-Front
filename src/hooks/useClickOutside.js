import { useEffect } from "react";

export default function useOnClickOutside(ref, handler, isNeeded) {

  useEffect(
    () => {

      const listener = (event) => {


        if ((event.type === "mousedown" && (!ref.current || ref.current.contains(event.target))) || (event.type !== "mousedown" && event.keyCode !== 27)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      document.addEventListener('keydown', listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
        document.removeEventListener('keydown', listener);
      };
    },

    [ref, handler]
  );
}