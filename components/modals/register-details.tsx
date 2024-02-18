"use client";

import useModal from "@/hooks/use-modal-store";

import { formatDistanceToNow } from "date-fns";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Button } from "../ui/button";

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

import { useRouter } from "next/navigation";

const RegisterDetails = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { push } = useRouter();

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

  const handleClose: () => void = () => {
    onClose();
  };

  const handleNavigate: (link: string) => void = (link) => {
    push(link);
    onClose();
  };

  const formatedDate = formatDistanceToNow(
    data.createdAt ? data.createdAt : new Date()
  );

  if (isDesktop) {
    return (
      <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Details</DialogTitle>
            <DialogDescription>See more details.</DialogDescription>
          </DialogHeader>
          <Separator />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="font-bold text-zinc-500">NAME:</span>
              <p className="capitalize text-base">{data.name}</p>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-zinc-500">DESCRIPTION:</span>
              <p className="capitalize text-base break-words">
                {data.description}
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="font-bold">{data.category}</p>
            <span className="text-zinc-500">{formatedDate}</span>
          </div>
          <DialogFooter className="w-full flex">
            <Button
              className="w-1/2"
              variant={"outline"}
              onClick={handleClose}
              aria-label="Close register details"
            >
              Close
            </Button>

            <Button
              className="w-1/2"
              variant={"secondary"}
              onClick={() => handleNavigate(`/${data.type}`)}
            >
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
        <div className="px-4">
          <Separator className="my-4" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="font-bold text-zinc-500">NAME:</span>
              <p className="capitalize text-base">{data.name}</p>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-zinc-500">DESCRIPTION:</span>
              <p className="capitalize text-base break-words">
                {data.description}
              </p>
            </div>

            <div className="mt-5 flex justify-between">
              <p className="font-bold">{data.category}</p>
              <span className="text-zinc-500">{formatedDate}</span>
            </div>
          </div>
        </div>
        <DrawerFooter className="flex">
          <Button
            variant={"outline"}
            onClick={handleClose}
            aria-label="Close register details"
          >
            Close
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => handleNavigate(`/${data.type}`)}
          >
            Go to {data.type}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RegisterDetails;
