import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const Baseayout = ({
   children
}: {
   children: React.ReactNode
}) => {
   return (
      <>
      <Navbar />
      <main className="min-h-svh">
         {children}
      </main>
      <Footer />
      </>
   )
};
