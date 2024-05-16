import { Inter } from "next/font/google";
import  "./global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F1 with Sainath",
  description: "This a web app to watch F1 live!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
