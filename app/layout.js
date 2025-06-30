import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "PathAI Career Coach",
  description: "PathAI is an AI-powered career coach that helps users navigate their professional journey by offering personalized guidance, resume insights, job matching, and interview preparation — all in real time.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            < Header/>
            <main className= "min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-12">
               <div className="container mx-auto px-4 text-center text-gray-200">
               <div className="space-y-2 text-sm text-muted-foreground">
               <p>&copy; {new Date().getFullYear()} PathAI Career Coach. All rights reserved.</p>
               <p>
               Powered by AI and Next.js — Guiding professionals toward smarter career decisions.
               </p>
              </div>
              </div>
            </footer>

          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
