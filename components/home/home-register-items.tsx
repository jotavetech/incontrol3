import useModal from "@/hooks/use-modal-store";

import { cn, formatValue } from "@/lib/utils";

import { Register } from "@/types";

interface HomeRegisterItemsTypeProps {
  type: "entries" | "expenses";
  registers: Register[];
}

const HomeRegisterItems = ({ type, registers }: HomeRegisterItemsTypeProps) => {
  const { onOpen } = useModal();

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
            className="flex w-full justify-between p-4 bg-[#fdfdfd] shadow-sm dark:bg-[#0c0c0c] mb-2 rounded-xl hover:opacity-70 transition-opacity"
            onClick={() => onOpen("registerDetails", { ...register, type })}
          >
            <p>{register.name}</p>
            <p>{}</p>
            <p
              className={cn(
                type === "entries"
                  ? "text-[#006100] dark:text-[#55dd55]"
                  : "text-red-500"
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
