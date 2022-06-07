import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AddStudent from "./components/Students/AddStudent";
import Details from "./components/Students/Details";
import Students from "./components/Students/Students";

function App() {
  return (
    <div className="bg-teal-50 min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/details" element={<Details />} />
        <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
