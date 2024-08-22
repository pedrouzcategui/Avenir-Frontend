import { Fragment } from "react/jsx-runtime";
import OperationsTable from "../components/Tables/OperationsTable";
export default function Balance() {
  return (
    <Fragment>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-4xl font-bold">Hola, Pedro!</h1>
          <p>Este es un texto indicando algo</p>
        </div>
        <div className="">
          <div className="border-slate-300 border px-8 py-4 flex flex-col items-center rounded-lg ">
            <span>Patrimonio Total</span>
            <span className="text-4xl font-semibold">$ 1,895,423.50</span>
          </div>
        </div>
        <div className="">
          <div className="bg-lime-300 text-green-900 px-8 py-4 flex flex-col items-center rounded-lg shadow-sm">
            <span>Dinero Disponible</span>
            <span className="text-4xl font-semibold">$ 313,423.50</span>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto"></div>
      <OperationsTable />
    </Fragment>
  );
}
