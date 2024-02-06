"use client";

import { useEffect, useState } from "react";

import CreateRegister from "../modals/create-register";
import RegisterDetails from "../modals/register-details";
import EditRegister from "../modals/edit-register";

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
      <EditRegister />
    </>
  );
};

export default ModalProvider;
