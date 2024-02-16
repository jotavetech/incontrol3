import { EntryCategory, ExpenseCategory } from "@prisma/client";

import RegisterItem from "./register-item";

import { ScrollArea } from "../ui/scroll-area";

import { cn, formatValue, getAtualDateRegisters } from "@/lib/utils";

import { SearchX } from "lucide-react";

type Register = {
  id: string;
  name: string;
  description: string;
  amount: number;
  category: EntryCategory | ExpenseCategory;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

type OrderBy = "amountAsc" | "amountDesc" | "createdAtAsc" | "createdAtDesc";

interface RegistersListProps {
  registers: Register[];
  orderBy: OrderBy;
  type: "expenses" | "entries";
  filterTags: string[];
  searchQuery: string;
  thisMonth: boolean;
}

const RegistersList = ({
  type,
  registers,
  filterTags,
  orderBy,
  searchQuery,
  thisMonth,
}: RegistersListProps) => {
  if (thisMonth) {
    registers = getAtualDateRegisters(registers);
  }

  if (filterTags.length)
    registers = registers.filter((register) =>
      filterTags.includes(register.category)
    );

  console.log(registers);

  if (searchQuery)
    registers = registers.filter(
      (register) =>
        register.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        register.amount.toString().includes(searchQuery.toLowerCase())
    );

  const handleOrderBy = () => {
    switch (orderBy) {
      case "amountAsc":
        registers = registers.sort((a, b) => a.amount - b.amount);
        break;
      case "amountDesc":
        registers = registers.sort((a, b) => b.amount - a.amount);
        break;
      case "createdAtAsc":
        registers = registers.sort(
          (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
        );
        break;
      case "createdAtDesc":
        registers = registers.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
    }
  };

  handleOrderBy();

  return (
    <>
      {" "}
      <p className="px-1 mt-4">
        Total:{" "}
        <span
          className={cn(
            "text-green-400",
            type === "expenses" && "text-red-400"
          )}
        >
          {type === "entries" ? "+" : "-"}
          {formatValue(0)}
        </span>
      </p>
      <ScrollArea className="mt-3 h-full lg:h-[650px] md:border md:p-2 md:rounded-xl pb-20 md:pb-0">
        {registers.length ? (
          registers.map((register) => (
            <RegisterItem key={register.id} register={register} type={type} />
          ))
        ) : (
          <div className="flex flex-col items-center h-full pt-20 md:pt-36 text-zinc-400">
            <SearchX className="w-12 h-12" />{" "}
            <p className="text-lg">Sorry, nothing found!</p>
          </div>
        )}
      </ScrollArea>
    </>
  );
};

export default RegistersList;
