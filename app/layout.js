import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "../styles/globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
