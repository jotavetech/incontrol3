"use client";

import { EntryCategory, ExpenseCategory } from "@prisma/client";
import RegisterItem from "./register-item";
import { ScrollArea } from "../ui/scroll-area";
import { cn, formatValue } from "@/lib/utils";
import { useEffect, useState } from "react";

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
}

const RegistersList = ({
  type,
  registers,
  filterTags,
  orderBy,
  searchQuery,
}: RegistersListProps) => {
  const [orderByRegisters, setOrderByRegisters] = useState<Register[]>([]);

  // TERMINAR FUNÇÃO DE FILTROS

  const handleFilters = () => {
    if (!filterTags.length || searchQuery) {
      handleOrderBy(registers);
    }

    if (filterTags.length) {
      const filteredByTags = registers.filter((register) =>
        filterTags.includes(register.category)
      );

      return handleOrderBy(filteredByTags);
    }

    if (searchQuery) {
      const filteredBySearch = registers.filter(
        (register) =>
          register.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          register.amount.toString().includes(searchQuery.toLowerCase())
      );

      return handleOrderBy(filteredBySearch);
    }
  };

  const handleOrderBy = (filteredRegisters: Register[]) => {
    switch (orderBy) {
      case "amountAsc":
        setOrderByRegisters(
          filteredRegisters.sort((a, b) => a.amount - b.amount)
        );
        break;
      case "amountDesc":
        setOrderByRegisters(
          filteredRegisters.sort((a, b) => b.amount - a.amount)
        );
        break;
      case "createdAtAsc":
        setOrderByRegisters(
          filteredRegisters.sort(
            (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
          )
        );
        break;
      case "createdAtDesc":
        setOrderByRegisters(filteredRegisters);
        break;
    }
  };

  useEffect(() => {
    handleFilters();
  }, [filterTags, searchQuery, orderBy, registers]);

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
      <ScrollArea className="mt-3 h-[600px] lg:h-[650px] md:border md:p-2 md:rounded-xl mb-28 md:mb-0">
        {orderByRegisters.length ? (
          orderByRegisters.map((register) => (
            <RegisterItem key={register.id} register={register} type={type} />
          ))
        ) : (
          <div>poxa, nada encontrado :(</div>
        )}
      </ScrollArea>
    </>
  );
};

export default RegistersList;
