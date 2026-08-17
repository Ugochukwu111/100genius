import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";

export default function AppLayout({header, children }) {
  return (
    <div className="flex flex-col flex-1">
         {header}

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
