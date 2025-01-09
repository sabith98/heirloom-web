import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 Heirloom
      </footer>
    </div>
  );
};

export default MainLayout;
