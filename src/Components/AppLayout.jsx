import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";

export default function AppLayout({header, children }) {
  return (
    <div>
      <Header>
         {header}
      </Header>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
