import react from "react";

const useInterval = (callback, delay) => {
  const savedCallback = react.useRef();

  react.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  react.useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval