import { useState, useEffect } from "react";

type initialState = boolean;

const useToggle = (initialState: initialState) => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => setStatus((status) => !status);

  return { status, toggleStatus, setStatus };
};

export default useToggle;
