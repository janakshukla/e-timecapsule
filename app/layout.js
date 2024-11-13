import {
  ClerkProvider,
} from '@clerk/nextjs'
import Navbar from '@/components/Navbar';
import "./globals.css";



export const metadata = {
  title: "E-TimeCapsule",
  description: "an app made for the future",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='bg-gray-900' >
        <Navbar />  
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
