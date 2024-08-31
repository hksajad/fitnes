import "./globals.css";
import "./grid.css"
import "./responsive.css"
import localFont from "next/font/local";
export const metadata = {
  title: "ایکس پاور",
};
const yekan = localFont({
  src: [
    {
      path: "../public/font/YekanBakhMedium.woff",
      style: "normal",
    }
  ]
})
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>{children}</body>
    </html>
  );
}
