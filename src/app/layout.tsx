import "./globals.css";
import Providers from "./Providers";
import dynamic from 'next/dynamic';

// ChatComponent'i client-side olarak yüklüyoruz
const ChatComponent = dynamic(() => import('@/components/ChatComponent'), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ChatComponent />
        </Providers>
      </body>
    </html>
  );
}
