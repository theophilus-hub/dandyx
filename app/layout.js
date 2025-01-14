import localFont from "next/font/local";
import "./globals.css";




export const metadata = {
  title: "Dandyx",
  description: "Experience best market rates anywhere in Nigeria in a blink",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
