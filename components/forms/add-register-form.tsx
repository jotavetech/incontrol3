"use client";

import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

import { formatValue } from "@/lib/utils";

import useModal from "@/hooks/use-modal-store";

import { EntryCategory, ExpenseCategory } from "@prisma/client";

import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

const registerFormSchema = z.object({
  name: z.string().refine((value) => value.length >= 3 && value.length <= 20, {
    message: "Name field must be between 3 and 20 characters",
  }),
  description: z
    .string()
    .min(3, "Description field must have at least 3 characters")
    .max(50, "Description field must have a maximum of 50 characters"),
  type: z.string().min(3, "Type is required"),
  category: z.string().min(3, "Category is required"),
  date: z.date().refine((date) => !isNaN(date.getTime()), {
    message: "Invalid date.",
  }),
  amount: z
    .number()
    .positive("Amount field must have to be a positive number")
    .min(0.01),
});

// TODO

// - Fix 0 on number input
// - Go to register when click on notification

const AddRegisterForm = () => {
  const [registerType, setRegisterType] = useState("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const { onClose } = useModal();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      description: "",
      type: registerType,
      category: "",
      date: new Date(),
      amount: 0,
    },
  });

  const toastMessage = (name: string, amount: number) =>
    toast({
      "aria-label": "Register notification",
      title: `${registerType} Created With Success!`,
      description: `${name}: ${formatValue(amount)}`,
      className: "capitalize rounded-xl",
      duration: 3000,
    });

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const typePath = values.type === "entry" ? "entries" : "expenses";

    try {
      setLoading(true);
      await axios.post(`/api/${typePath}`, values);

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
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bolddark:text-secondary/70">
                  Register Type
                </FormLabel>
                <Select
                  onValueChange={(value) => {
                    setRegisterType(value);
                    form.setValue("type", value);
                    form.setValue("category", "");
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 capitalize">
                      <SelectValue placeholder="Select a register type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem
                      key={"entry"}
                      value={"entry"}
                      className="capitalize"
                    >
                      Entry
                    </SelectItem>
                    <SelectItem
                      key={"expense"}
                      value={"expense"}
                      className="capitalize"
                    >
                      Expense
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs md:text-base" />
              </FormItem>
            )}
          />
          {registerType === "entry" && (
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bolddark:text-secondary/70">
                    Entry Category
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 capitalize">
                        <SelectValue placeholder="Select a entry category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {registerType &&
                        Object.values(EntryCategory).map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className="capitalize"
                          >
                            {type.toLowerCase()}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs md:text-base" />
                </FormItem>
              )}
            />
          )}

          {registerType === "expense" && (
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bolddark:text-secondary/70">
                    Expense Category
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 capitalize">
                        <SelectValue placeholder="Select a expense category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {registerType &&
                        Object.values(ExpenseCategory).map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className="capitalize"
                          >
                            {type.toLowerCase()}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs md:text-base" />
                </FormItem>
              )}
            />
          )}

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
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddRegisterForm;
