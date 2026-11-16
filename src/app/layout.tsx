import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "../../components/Hoc/Provider";
import ResponsiveNavbar from "../../components/Home/Navbar/ResponsiveNavbar";
import Footer from "../../components/Home/Footer/Footer";
import ScrollToTop from "../../components/Helper/ScrollToTop";

const rubik = Rubik({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakib Web Agency",
  description: "A more beautiful web experience with Rakib Web Agency",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rubik.className} antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNavbar />
          {children}
          <Footer />
          <ScrollToTop/>
        </Provider>
      </body>
    </html>
  );
}
