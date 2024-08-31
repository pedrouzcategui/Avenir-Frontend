import { ColumnDef } from "@tanstack/react-table";
import BaseTable from "./BaseTable";
import Badge from "../Badge";
import { formatNumberToUSDDollars } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { getOperations } from "../../api/operations";

type Operation = {
  id: string;
  date: string;
  participant: string;
  amount: number;
  type: "income" | "expense";
};

const operationColumns: ColumnDef<Operation, any>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "participant",
    header: "Beneficiario/Remitente",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: (info) => <Badge>{info.row.original.type}</Badge>,
  },
  {
    accessorKey: "amount",
    header: "Monto",
    cell: (info) => <span>{formatNumberToUSDDollars(info.getValue())}</span>,
  },
];

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
    participant: "Hoff Marketing LLC 22",
    amount: 2500,
    type: "income",
  },
];

export default function OperationsTable() {
  const { data } = useQuery({
    queryKey: ["operations"],
    queryFn: getOperations,
  });

  return <BaseTable columns={operationColumns} data={SAMPLE_OPERATIONS} />;
}
