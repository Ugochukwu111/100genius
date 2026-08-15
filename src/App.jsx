import Footer from "@/Components/Footer";
import { Route, Routes } from "react-router-dom";
import NavBar from "@/Components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route index element={<h1></h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
