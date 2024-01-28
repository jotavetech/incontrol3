import { Entry, Expense } from "@prisma/client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "../ui/scroll-area";

import { formatValue } from "@/lib/utils";
import { Input } from "../ui/input";

interface RegistersTable {
  type: "entries" | "expenses";
  registers: Entry[] | Expense[];
  total: number;
}

const RegistersTable = ({ type, registers, total }: RegistersTable) => {
  return (
    <div className="w-full">
      <div className="flex gap-2 mt-4">
        <Input placeholder="Search by..." className="rounded-xl" />
        <Select>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Order by" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="desc">Descending</SelectItem>
            <SelectItem value="default">No Order</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="mt-3 max-h-[400px]">
        {registers.map((register) => (
          <div
            key={register.id}
            className="py-2 px-4 bg-[#f8f8f8] shadow-sm rounded-xl mb-2 flex items-center h-[70px]"
          >
            <div className="w-1/2">
              <p className="Capitalize">{register.name}</p>
              <span className="text-xs text-zinc-400 break-words">
                {register.category}
              </span>
            </div>
            <div className="w-1/2 flex items-end flex-col">
              <p className="text-xs text-zinc-400">Total</p>
              <p className="text-[12px] text-green-400">
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
        Total: <span className="text-green-400">+{formatValue(total)}</span>
      </p>
    </div>
  );
};

export default RegistersTable;
