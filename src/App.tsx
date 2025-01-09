import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
