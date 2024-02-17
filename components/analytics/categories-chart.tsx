"use client";

import Chart from "react-apexcharts";

import { Entry, Expense } from "@prisma/client";

import { useTheme } from "next-themes";

type Register = Entry | Expense;

interface CategoriesChartProps {
  registers: Register[];
}

type HashCategories = { [key: string]: Register[] };

const CategoriesChart = ({ registers }: CategoriesChartProps) => {
  const { theme } = useTheme();

  const hashCategories: HashCategories = {};

  for (let register of registers) {
    const category = register.category;

    if (!hashCategories[category]) {
      hashCategories[category] = [register];
    } else {
      hashCategories[category] = [...hashCategories[category], register];
    }
  }

  const categoriesKeys = Object.keys(hashCategories);

  const categoriesResult = Object.values(hashCategories).map(
    (categoryItems) => categoryItems.length
  );

  const chart = {
    options: {
      colors: ["#DC2626"],
      chart: {
        id: "basic-bar",
        background: "transparent",
      },
      theme: {
        mode: theme as "light" | "dark",
        monochrome: {
          enabled: false,
          shadeIntensity: 0.65,
        },
      },
      xaxis: {
        categories: categoriesKeys,
      },
    },
    series: [
      {
        name: "Registers ",
        data: categoriesResult,
      },
    ],
  };
  return (
    <Chart
      type="bar"
      options={chart.options}
      width="100%"
      height="100%"
      series={chart.series}
    />
  );
};

export default CategoriesChart;
