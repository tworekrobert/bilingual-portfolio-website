import type { ReactNode } from "react";

export const metadata = {
  title: "Robert Tworek | AI + .NET Developer"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
