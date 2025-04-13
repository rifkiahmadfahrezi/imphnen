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
      <main className="min-h-svh border-x max-w-screen-xl mx-auto">
         {children}
      </main>
      <Footer />
      </>
   )
};
