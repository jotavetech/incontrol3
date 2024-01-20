"use client";

import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal, Trash, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { formatValue } from "@/lib/utils";

export type Item = {
  id: string;
  name: string;
  type: string;
  amount: number;
  data: string;
};

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "name",
    header: "Description",
  },

  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",

    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = formatValue(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "data",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xs md:text-base"
        >
          Data
          <ArrowUpDown className="ml-2 h-3 w-3 md:h-4 md:w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-semibold">Edit</DropdownMenuItem>
            <DropdownMenuItem className="font-semibold text-red-400 flex items-center gap-2">
              Delete <Trash />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
