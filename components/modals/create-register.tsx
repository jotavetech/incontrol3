"use client";

import useModal from "@/hooks/use-modal-store";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Button } from "../ui/button";

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
        <AddRegisterForm />
        <DrawerFooter>
          <DrawerClose onClick={handleClose}>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateRegister;
