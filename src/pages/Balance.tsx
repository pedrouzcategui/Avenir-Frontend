import { Fragment } from "react/jsx-runtime";
import { LuArrowUpRight, LuEye } from "react-icons/lu";
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

      <div className="relative overflow-x-auto">
        <table className="w-full text-gray-700 text-sm text-left rtl:text-right">
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
        </table>
      </div>
    </Fragment>
  );
}
