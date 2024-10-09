import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";


export const metadata = {
  title: "Event Manager",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="overlay"></div>
        <div className="homeBody">
        <Header/>
        {children}
        <LeadForm/>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
