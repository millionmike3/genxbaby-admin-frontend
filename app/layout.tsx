import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
