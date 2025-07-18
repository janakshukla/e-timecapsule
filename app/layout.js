import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import "./globals.css";

import syncuser from '@/helpers/syncuser';
import { Baloo_Bhaijaan_2 } from "next/font/google";
import Footer from '@/components/Footer';

export const metadata = {
  title: "E-TimeCapsule",
  description: "an app made for the future",
};

const customFont = Baloo_Bhaijaan_2({
  subsets: ["latin"],
  weights: ["400", "700", "800"],
});

export default function RootLayout({ children }) {
  syncuser();

  return (
    <ClerkProvider
      appearance={{
        userProfile: {
          variables: {
            fontFamily: customFont.family,
            colorPrimary: "#1f2123",
          }
        },
        variables: {
          fontFamily: customFont.family,
          colorDanger: "#e94f37"
        },
      }}
    >
      <html lang="en">
        <body className={`bg-primary-300 ${customFont.className} min-h-screen flex flex-col`}>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}