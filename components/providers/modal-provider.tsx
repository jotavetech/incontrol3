"use client";

import { useEffect, useState } from "react";

import CreateRegister from "../modals/create-register";
import RegisterDetails from "../modals/register-details";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateRegister />
      <RegisterDetails />
    </>
  );
};

export default ModalProvider;
