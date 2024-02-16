"use client";

import { EntryCategory, ExpenseCategory } from "@prisma/client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

import { cn, getAtualDateRegisters } from "@/lib/utils";

import { useState } from "react";
import RegistersList from "./registers-list";

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
}

type OrderByProps =
  | "amountAsc"
  | "amountDesc"
  | "createdAtAsc"
  | "createdAtDesc";

const RegistersTable = ({ type, registers }: RegistersTable) => {
  const [searchInput, setSearchInput] = useState("");

  const [filterThisMonth, setFilterThisMonth] = useState(() => {
    const thisMonthRegisters = getAtualDateRegisters(registers);

    return !!thisMonthRegisters.length;
  });

  const [tags, setTags] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState<OrderByProps>("createdAtDesc");

  const categories = type === "entries" ? EntryCategory : ExpenseCategory;

  const tagExistsOnState = (tag: string) => tags.find((atual) => atual === tag);

  const handleTags = (tag: string) => {
    if (tagExistsOnState(tag)) {
      const remainingTags = tags.filter((atual) => atual !== tag);
      return setTags(remainingTags);
    }

    setTags((prev) => [...prev, tag]);
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
        <Select
          value={orderBy}
          onValueChange={(value) => setOrderBy(value as OrderByProps)}
        >
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Order by" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="amountAsc">(Amount) Ascending</SelectItem>
            <SelectItem value="amountDesc">(Amount) Descending</SelectItem>
            <SelectItem value="createdAtAsc">(Created At) Ascending</SelectItem>
            <SelectItem value="createdAtDesc">
              (Created At) Descending
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <div className="px-1 flex flex-wrap gap-2">
          {!searchInput && (
            <>
              <p>Tags: </p>
              <Badge
                variant={"outline"}
                onClick={() => setFilterThisMonth(!filterThisMonth)}
                className={cn(
                  "capitalize cursor-pointer",
                  filterThisMonth &&
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
            </>
          )}
        </div>
      </div>
      <RegistersList
        thisMonth={filterThisMonth}
        type={type}
        registers={registers}
        orderBy={orderBy}
        searchQuery={searchInput}
        filterTags={tags}
      />
    </div>
  );
};

export default RegistersTable;
