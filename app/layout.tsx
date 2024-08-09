export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body>
      Sidebar
     {children}
    </body>
    </html>
  );
}
