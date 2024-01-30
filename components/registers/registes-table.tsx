"use client";

import { Entry, EntryCategory, Expense, ExpenseCategory } from "@prisma/client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

import { cn, formatValue } from "@/lib/utils";

import RegisterItem from "./register-item";

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

interface RegistersTable {
  type: "entries" | "expenses";
  registers: Register[];
  total: number;
}

const RegistersTable = ({ type, registers, total }: RegistersTable) => {
  const [searchInput, setSearchInput] = useState("");
  const [tags, setTags] = useState<string[]>(["THIS_MONTH"]);
  const [filteredRegisters, setFilteredRegisters] = useState<Register[]>([]);

  const categories = type === "entries" ? EntryCategory : ExpenseCategory;

  const tagExistsOnState = (tag: string) => tags.find((atual) => atual === tag);

  const handleTags = (tag: string) => {
    if (tagExistsOnState(tag)) {
      const remainingTags = tags.filter((atual) => atual !== tag);
      return setTags(remainingTags);
    }

    setTags((prev) => [...prev, tag]);
  };

  useEffect(() => {
    handleFilteredRegisters();
  }, [tags, searchInput]);

  const handleFilteredRegisters = () => {
    let newFilteredRegisters: Register[] = [];

    if (tags.length)
      newFilteredRegisters = registers.filter((register) =>
        tags.includes(register.category)
      );

    if (searchInput)
      newFilteredRegisters = registers.filter(
        (register) =>
          register.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          register.amount.toString().includes(searchInput)
      );

    setFilteredRegisters(newFilteredRegisters);
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 mt-4">
        <Input
          placeholder="Search by..."
          className="rounded-xl"
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
        />
        <Select>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Order by" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="asc">(Amount) Ascending</SelectItem>
            <SelectItem value="desc">(Amount) Descending</SelectItem>
            <SelectItem value="asc">(Created At) Ascending</SelectItem>
            <SelectItem value="desc">(Created At) Descending</SelectItem>
            <SelectItem value="default">No Order</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <div className="px-1 flex flex-wrap gap-2">
          <p>Tags: </p>
          <Badge
            variant={"outline"}
            onClick={() => handleTags("THIS_MONTH")}
            className={cn(
              "capitalize cursor-pointer",
              tagExistsOnState("THIS_MONTH") &&
                "bg-black text-white border-black dark:bg-white dark:text-black"
            )}
          >
            This Month
          </Badge>
          {Object.values(categories).map((category) => (
            <Badge
              key={category}
              variant={"outline"}
              className={cn(
                "capitalize cursor-pointer",
                tagExistsOnState(category) &&
                  "bg-black text-white border-black dark:bg-white dark:text-black"
              )}
              onClick={() => handleTags(category)}
            >
              {category.toLowerCase()}
            </Badge>
          ))}
        </div>
      </div>
      <p className="px-1 mt-4">
        Total:{" "}
        <span
          className={cn(
            "text-green-400",
            type === "expenses" && "text-red-400"
          )}
        >
          {type === "entries" ? "+" : "-"}
          {formatValue(total)}
        </span>
      </p>
      <ScrollArea className="mt-3 h-[400px] md:h-[600px] lg:h-[650px] md:border md:p-2 md:rounded-xl mb-20 md:mb-0">
        {!filteredRegisters.length &&
          registers.map((register) => (
            <RegisterItem key={register.id} register={register} type={type} />
          ))}
        {filteredRegisters.length > 0 &&
          filteredRegisters.map((register) => (
            <RegisterItem key={register.id} register={register} type={type} />
          ))}
      </ScrollArea>
    </div>
  );
};

export default RegistersTable;
