import { columns } from "@/components/table/columns";

import { DataTable } from "@/components/table/data-table";

import { Coins } from "lucide-react";

const mockData = [
  {
    id: "1",
    description: "Internet",
    status: "Bill",
    type: "Home",
    amount: 130,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Luz",
    status: "Bill",
    type: "Home",
    amount: 220,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Salario",
    status: "Entrie",
    type: "Work",
    amount: 1500,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Gasolina",
    status: "bill",
    type: "Car",
    amount: 330,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Banana",
    status: "Bill",
    type: "Shop",
    amount: 12,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animal",
    amount: 130,
    data: "01/19/2024",
  },

  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animal",
    amount: 130,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animal",
    amount: 130,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animal",
    amount: 130,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animal",
    amount: 130,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animal",
    amount: 130,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animal",
    amount: 130,
    data: "01/19/2024",
  },
  {
    id: "1",
    description: "Ração",
    status: "bill",
    type: "Animallllllllllasfkhajkfghasjkgohasgjkasl",
    amount: 130,
    data: "01/19/2024",
  },
];

const ResumePage = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl font-bold ml-4 my-4 md:ml-8 md:my-8 md:text-3xl flex gap-2 items-center">
          <Coins /> Resume
        </h1>
      </div>
      <div className="flex flex-col h-full w-full items-center md:items-start md:px-8">
        <DataTable columns={columns} data={mockData} />
      </div>
    </div>
  );
};

export default ResumePage;
