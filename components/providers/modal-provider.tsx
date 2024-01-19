"use client";

import { useEffect, useState } from "react";

import CreateRegister from "../modals/create-register";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateRegister />
    </>
  );
};

export default ModalProvider;
