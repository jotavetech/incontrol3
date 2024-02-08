import { Entry, Expense } from "@prisma/client";

import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

type Register = Entry | Expense;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatValue(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const monthsMap: { [key: number]: string } = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const getAtualDateRegisters = (registers: Register[]) => {
  const atualYear = new Date().getFullYear();
  const atualMonth = new Date().getMonth();

  const atualRegisters = registers.filter(
    (register) =>
      register.createdAt.getMonth() === atualMonth &&
      register.createdAt.getFullYear() === atualYear
  );

  return atualRegisters;
};
