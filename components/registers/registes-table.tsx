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
        {registers.map((register) => (
          <RegisterItem key={register.id} register={register} type={type} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default RegistersTable;
