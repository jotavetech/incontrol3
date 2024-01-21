"use client";

import useModal from "@/hooks/use-modal-store";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import AddRegisterForm from "../forms/add-register-form";

import { useEffect } from "react";

const CreateRegister = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createRegister";

  useEffect(() => {
    const keyboardHandleClose = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") onClose();
    };

    window.addEventListener("keydown", keyboardHandleClose);

    return () => {
      window.removeEventListener("keydown", keyboardHandleClose);
    };
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Drawer open={isModalOpen} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add New Register</DrawerTitle>
          <DrawerDescription>Keep tracking your finances</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <AddRegisterForm />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateRegister;
