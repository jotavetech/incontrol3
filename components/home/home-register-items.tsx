import { cn, formatValue } from "@/lib/utils";

import { Entry, Expense } from "@prisma/client";

interface HomeRegisterItemsTypeProps {
  type: "entries" | "expenses";
  registers: Expense[] | Entry[];
}

const HomeRegisterItems = ({ type, registers }: HomeRegisterItemsTypeProps) => {
  return (
    <>
      {registers.length <= 0 && (
        <div className="w-full h-[250px] lg:h-[290px] flex items-center justify-center text-center p-2">
          <p className="opacity-60 text-sm lg:text-lg">
            You dont have any {type} records yet, create one now!
          </p>
        </div>
      )}
      {registers.length > 0 &&
        registers.map((register) => (
          <button
            key={register.id}
            className="flex w-full justify-around p-4 border mb-2 rounded-xl"
          >
            <p>{register.name}</p>
            <p>{}</p>
            <p
              className={cn(
                type === "entries" ? "text-green-500" : "text-red-400"
              )}
            >
              {type === "entries" ? "+" : "-"}
              {formatValue(register.amount)}
            </p>
          </button>
        ))}
    </>
  );
};

export default HomeRegisterItems;
