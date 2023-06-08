import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dan Clubb",
  description: "Dan Clubb's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header id="top">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
