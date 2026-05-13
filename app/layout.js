export const metadata = {
  title: "Deploy Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#1a1a1a", color: "#e0e0e0" }}>
        {children}
      </body>
    </html>
  );
}
