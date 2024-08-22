import { useState } from "react";

type Operation = {
  id: string;
  date: string;
  participant: string;
  amount: number;
  type: "income" | "expense";
};

const SAMPLE_OPERATIONS: Operation[] = [
  {
    id: crypto.randomUUID(),
    date: "2024-08-21",
    participant: "Hoff Marketing LLC",
    amount: 2500,
    type: "income",
  },
  {
    id: crypto.randomUUID(),
    date: "2024-08-21",
    participant: "Hoff Marketing LLC",
    amount: 2500,
    type: "income",
  },
];

export default function Table() {
  const [data, setData] = useState<Operation[]>(SAMPLE_OPERATIONS);

  return <div></div>;
}

{
  /* <table className="w-full text-gray-700 text-sm text-left rtl:text-right">
<thead className="text-xs uppercase bg-gray-700 dark:text-gray-400">
  <tr>
    <th scope="col" className="px-6 py-3">
      <input type="checkbox" />
    </th>
    <th scope="col" className="px-6 py-3">
      ID
    </th>
    <th scope="col" className="px-6 py-3">
      Fecha
    </th>
    <th scope="col" className="px-6 py-3">
      Beneficiario/Remitente
    </th>
    <th scope="col" className="px-6 py-3">
      Monto
    </th>
    <th scope="col" className="px-6 py-3">
      Tipo de operación
    </th>
    <th scope="col" className="px-6 py-3">
      <LuEye />
    </th>
  </tr>
</thead>
<tbody>
  <tr className=" border-slate-300 border">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white"
    >
      <input type="checkbox" />
    </th>
    <td className="px-6 py-4">#f48d96</td>
    <td className="px-6 py-4">14 de Agosto</td>
    <td className="px-6 py-4">Facebook Inc.</td>
    <td className="px-6 py-4">
      <span className="px-4 py-2 rounded-lg font-semibold bg-lime-200 text-green-950">
        + $1,500
      </span>
    </td>
    <td className="px-6 py-4">Ingreso</td>
    <td className="px-6 py-4">
      <LuArrowUpRight />
    </td>
  </tr>
</tbody>
</table> */
}
