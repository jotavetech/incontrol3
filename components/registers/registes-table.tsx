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

interface RegistersTable {
  type: "entries" | "expenses";
  registers: Entry[] | Expense[];
  total: number;
}

const RegistersTable = ({ type, registers, total }: RegistersTable) => {
  const categories = type === "entries" ? EntryCategory : ExpenseCategory;

  return (
    <div className="w-full">
      <div className="flex gap-2 mt-4">
        <Input placeholder="Search by..." className="rounded-xl" />
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
          <Badge variant={"outline"}>This Month</Badge>
          {Object.values(categories).map((category) => (
            <Badge key={category} variant={"outline"} className="capitalize">
              {category.toLowerCase()}
            </Badge>
          ))}
        </div>
      </div>
      <ScrollArea className="mt-3 max-h-[400px]">
        {registers.map((register) => (
          <div
            key={register.id}
            className="py-2 px-4 bg-[#f8f8f8] dark:bg-[#0c0c0c] shadow-sm rounded-xl mb-2 flex items-center h-[70px]"
          >
            <div className="w-1/2">
              <p className="Capitalize">{register.name}</p>
              <span className="text-xs text-zinc-400 break-words">
                {register.category}
              </span>
            </div>
            <div className="w-1/2 flex items-end flex-col">
              <p className="text-xs text-zinc-400">Total</p>
              <p
                className={cn(
                  "text-green-400 text-[12px]",
                  type === "expenses" && "text-red-400"
                )}
              >
                +{formatValue(register.amount)}
              </p>
              <span className="text-xs text-zinc-400 break-words">
                {register.updatedAt.getFullYear()}
              </span>
            </div>
          </div>
        ))}
      </ScrollArea>
      <p className="px-2">
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
    </div>
  );
};

export default RegistersTable;
