export const metadata = {
  title: "MODO U",
  description: "Plataforma educativa de Matemática y Química",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
