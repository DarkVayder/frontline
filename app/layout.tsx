import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-950">
        <Header />
        <ToastContainer position="top-right" autoClose={2000} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}