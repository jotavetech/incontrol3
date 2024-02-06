"use client";

import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

import { formatValue } from "@/lib/utils";

import useModal from "@/hooks/use-modal-store";

import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

import { Trash } from "lucide-react";

const registerFormSchema = z.object({
  name: z.string().refine((value) => value.length >= 3 && value.length <= 20, {
    message: "Name field must be between 3 and 20 characters",
  }),
  description: z
    .string()
    .min(3, "Description field must have at least 3 characters")
    .max(50, "Description field must have a maximum of 50 characters"),
  amount: z
    .number()
    .positive("Amount field must have to be a positive number")
    .min(0.01),
});

// TODO

// - Fix 0 on number input
// - Go to register when click on notification

const EditRegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const { onClose, data } = useModal();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: data.name!,
      description: data.description!,
      amount: data.amount!,
    },
  });

  const toastMessage = (name: string, amount: number) =>
    toast({
      "aria-label": "Register notification",
      title: `Register Edited With Success!`,
      description: `${name}: ${formatValue(amount)}`,
      className:
        "dark:border-white dark:bg-[#000000] dark:text-white bg-zinc-100 border-black text-black rounded-xl capitalize",
      duration: 3000,
    });

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    try {
      setLoading(true);
      await axios.patch(`/api/${data.type}`, { ...values, id: data.id });
      form.reset();
      router.refresh();
      onClose();
      toastMessage(values.name, values.amount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      console.log(`/api/${data.type}/${data.id}`);
      await axios.delete(`/api/${data.type}/${data.id}`);
      form.reset();
      router.refresh();
      onClose();
      toast({
        "aria-label": "Register notification",
        title: `Register Deleted With Success!`,
        description: `Success on register delete`,
        className:
          "dark:border-white dark:bg-[#000000] dark:text-white bg-zinc-100 border-black text-black rounded-xl capitalize",
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bolddark:text-secondary/70">
                  name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter register name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs md:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bolddark:text-secondary/70">
                  Description
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter register description"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs md:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bolddark:text-secondary/70">
                  Amount
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter register amount"
                    {...field}
                    onChange={({ target }) => {
                      const value = parseFloat(target.value);
                      form.setValue("amount", isNaN(value) ? 0 : value);
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs md:text-base" />
              </FormItem>
            )}
          />
          <Button
            variant="default"
            className="w-full mt-2"
            type="submit"
            disabled={loading}
          >
            Save
          </Button>

          <AlertDialog>
            <AlertDialogTrigger disabled={loading}>
              <Button
                variant="secondary"
                className="w-full mt-2 gap-1 flex items-center"
                type="button"
                disabled={loading}
              >
                <Trash className="w-4 h-4" /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your register.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete} disabled={loading}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </Form>
  );
};

export default EditRegisterForm;
