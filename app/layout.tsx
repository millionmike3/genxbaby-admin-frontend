
import "./globals.css";
import type { Metadata } from "next";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "GX Pricing Engine | Institutional Financial Intelligence",
  description:
    "Institutional-grade financial pricing, risk analytics, and market intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#080D16] font-rounded text-slate-100 antialiased">

        <div className="flex min-h-screen w-full overflow-x-hidden">

          {/* Institutional Navigation */}
          <aside className="relative z-30 shrink-0">
            <Sidebar />
          </aside>

          {/* Main Application Workspace */}
          <div className="flex min-w-0 flex-1 flex-col bg-[#0B1220]">

            {/* Top Navigation */}
            <header className="sticky top-0 z-20 border-b border-[#253247] bg-[#0B1220]/95 backdrop-blur-xl">
              <Topbar />
            </header>

            {/* Application Content */}
            <main className="flex-1 bg-[#0B1220]">

              <div className="
                mx-auto
                w-full
                max-w-[1800px]
                px-4
                py-6
                sm:px-6
                sm:py-8
                lg:px-8
                xl:px-10
              ">

                {/* Content Surface */}
                <div className="min-h-[calc(100vh-130px)] space-y-6">

                  {children}

                </div>

                {/* Institutional Footer */}
                <footer className="
                  mt-12
                  flex
                  flex-col
                  justify-between
                  gap-3
                  border-t
                  border-[#253247]
                  pt-5
                  text-xs
                  text-slate-500
                  sm:flex-row
                  sm:items-center
                ">
                  <span>
                    GX PRICING ENGINE © {new Date().getFullYear()}
                  </span>

                  <div className="flex flex-wrap items-center gap-4">
                    <span>INSTITUTIONAL FINANCIAL INTELLIGENCE</span>

                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      SYSTEM ONLINE
                    </span>
                  </div>
                </footer>

              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
