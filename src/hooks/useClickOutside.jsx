import { useEffect, useState } from "react";

const useClickOutside = (ref) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        alert("click outside");
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [ref]);
};
export default useClickOutside;
