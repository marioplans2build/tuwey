export const metadata = {
  title: "Mario Puddunan Portfolio",
  description: "Licensed Civil Engineer | Project Coordinator | Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
