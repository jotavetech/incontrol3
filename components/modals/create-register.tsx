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

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const CreateRegister = () => {
  const { isOpen, onClose, type } = useModal();

  const isDesktop = useMediaQuery("(min-width: 768px)");

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

  if (isDesktop) {
    return (
      <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Register</DialogTitle>
            <DialogDescription>Keep tracking your finances.</DialogDescription>
          </DialogHeader>
          <AddRegisterForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isModalOpen} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add New Register</DrawerTitle>
          <DrawerDescription>Keep tracking your finances.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <AddRegisterForm />
        </div>
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
