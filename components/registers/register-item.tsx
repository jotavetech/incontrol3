import useModal from "@/hooks/use-modal-store";

import { cn, formatValue } from "@/lib/utils";

import { Register } from "@/types";

interface RegisterItemProps {
  register: Register;
  type: "expenses" | "entries";
}

const RegisterItem = ({ register, type }: RegisterItemProps) => {
  const { onOpen } = useModal();

  return (
    <div
      className="py-2 px-4 bg-[#fdfdfd] dark:bg-[#0c0c0c] shadow-sm rounded-xl mb-2 flex items-center h-[80px] md:h-[90px] cursor-pointer hover:opacity-75 transition-opacity"
      onClick={() => onOpen("editRegister", { ...register, type })}
    >
      <div className="w-1/2">
        <p className="capitalize text-lg">{register.name}</p>
        <span className="text-sm text-zinc-600 dark:text-zinc-300 font-medium break-words">
          {register.category}
        </span>
      </div>
      <div className="w-1/2 flex items-end flex-col">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">Total</p>
        <p
          className={cn(
            "text-[#006100] dark:text-[#55dd55] text-base",
            type === "expenses" && "text-red-500 dark:text-red-500"
          )}
        >
          {type === "expenses" ? "-" : "+"}
          {formatValue(register.amount)}
        </p>
        <span className="text-xs text-zinc-600 dark:text-zinc-300">
          {register.createdAt.toLocaleDateString("pt-BR")}
        </span>
      </div>
    </div>
  );
};

export default RegisterItem;
