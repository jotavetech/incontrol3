import { cn, formatValue } from "@/lib/utils";
import { Entry, Expense } from "@prisma/client";

interface RegisterItemProps {
  register: Expense | Entry;
  type: "expenses" | "entries";
}

const RegisterItem = ({ register, type }: RegisterItemProps) => {
  return (
    <div className="py-2 px-4 bg-[#f8f8f8] dark:bg-[#0c0c0c] shadow-sm rounded-xl mb-2 flex items-center h-[70px]">
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
          {register.createdAt.toLocaleDateString("pt-BR")}
        </span>
      </div>
    </div>
  );
};

export default RegisterItem;
