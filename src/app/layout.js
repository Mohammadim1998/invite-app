import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      </body>
    </html>



  );
}
