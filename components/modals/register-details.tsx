"use client";

// FIX CREATED AT FORMAT

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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

const RegisterDetails = () => {
  const { isOpen, onClose, type, data } = useModal();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const isModalOpen = isOpen && type === "registerDetails";

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
            <DialogTitle>Details</DialogTitle>
            <DialogDescription>See more details.</DialogDescription>
          </DialogHeader>

          <Separator />
          <div>
            <p className="capitalize font-medium text-xl">{data.name}</p>
            <p className="mt-2">{data.description}</p>
            <div className="mt-5 flex justify-between">
              <p className="font-bold">{data.category}</p>
              <span className="text-zinc-500">
                {data.createdAt?.getFullYear()}
              </span>
            </div>
          </div>
          <DialogFooter className="w-full flex">
            <Button className="w-1/2" variant={"outline"}>
              Close
            </Button>
            <Button className="w-1/2" variant={"secondary"}>
              Go to {data.type}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isModalOpen} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Details</DrawerTitle>
          <DrawerDescription>See more details.</DrawerDescription>
        </DrawerHeader>
        <Separator />
        <div className="px-4 pt-4">
          <div>
            <p className="capitalize font-medium text-xl">{data.name}</p>
            <p className="mt-2">{data.description}</p>
            <div className="mt-5 flex justify-between">
              <p className="font-bold">{data.category}</p>
              <span className="text-zinc-500">
                {data.createdAt?.getFullYear()}
              </span>
            </div>
          </div>
        </div>
        <DrawerFooter className="flex">
          <Button variant={"outline"}>Close</Button>
          <Button variant={"secondary"}>Go to {data.type}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RegisterDetails;
