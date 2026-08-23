import { lazy, Suspense } from "react";
import SmoothScroll from "./Components/animations/SmoothScroll";
import { Route, Routes } from "react-router-dom";
import NavBar from "@/Components/NavBar";
import WhatsAppIcon from "./Components/WhatsAppIcon";
import PageLoader from "./Components/PageLoader";
import PageTransition from "./Components/animations/PageTransition";
// Pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const ProgrammesPage = lazy(
  () => import("./Pages/ProgrammesPage/ProgrammesPage"),
);
const ApplyPage = lazy(() => import("./Pages/ApplyPage/ApplyPage"));

function App() {
  return (
    <>
      <SmoothScroll />
      <NavBar></NavBar>
      <WhatsAppIcon />
      <Suspense fallback={<PageLoader />}>
      <PageTransition>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/programme/:slug" element={<ProgrammesPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </PageTransition>
      </Suspense>
    </>
  );
}

export default App;
