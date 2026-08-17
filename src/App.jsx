import Footer from "@/Components/Footer";
import { Route, Routes } from "react-router-dom";
import NavBar from "@/Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route index element={<HomePage/>}  />
      </Routes>
    </>
  );
}

export default App;
