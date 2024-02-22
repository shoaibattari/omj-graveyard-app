import "./globals.css";
import Navbar from "./Components/Navbar";


export const metadata = {
  title: "OMJ Graveyard",
  description: "create app for graveyard data searching for visitors gravyard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
