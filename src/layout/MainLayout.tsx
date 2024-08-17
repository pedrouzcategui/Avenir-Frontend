import { Outlet } from "react-router-dom";
import {
  LuLayoutPanelLeft,
  LuCalculator,
  LuBanknote,
  LuUser,
  LuDoorOpen,
} from "react-icons/lu";

export default function MainLayout() {
  return (
    <div className="grid grid-cols-6">
      <nav className="col-span-1 h-screen bg-slate-800 text-white px-8 py-4">
        <ul>
          <span className="text-xs mb-3 block text-slate-400">
            Administración
          </span>
          <li className="mb-3 flex items-center gap-2">
            <LuLayoutPanelLeft /> Panel Administrativo
          </li>
          <li className="mb-3 flex items-center gap-2">
            <LuBanknote /> Cuentas
          </li>
          <li className="mb-3 flex items-center gap-2">
            <LuCalculator /> Presupuestos
          </li>
          <hr className="mb-3 border-slate-600" />
          <span className="text-xs mb-3 block text-slate-400">Cuenta</span>
          <li className="mb-3 flex items-center gap-2">
            <LuUser />
            Ajustes de la cuenta
          </li>
          <hr className="mb-3 border-slate-600" />
          <li className="mb-3 flex items-center gap-2">
            <LuDoorOpen />
            Log Out
          </li>
        </ul>
      </nav>
      <main className="col-span-5 px-8 py-4">
        <Outlet />
      </main>
    </div>
  );
}
