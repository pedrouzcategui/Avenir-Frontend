import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <main className="col-span-5 px-8 py-4">
        <Outlet />
      </main>
    </div>
  );
}
