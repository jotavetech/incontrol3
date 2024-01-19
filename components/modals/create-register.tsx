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

import { Button } from "../ui/button";

const CreateRegister = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createRegister";

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
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateRegister;
