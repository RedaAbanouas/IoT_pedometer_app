// app/providers.jsx
'use client'; // This component must be a Client Component

import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
  // `attribute="class"` ensures that the theme is applied by adding 
  // 'light' or 'dark' classes to the <html> element, which is the 
  // standard way to theme with Tailwind CSS.
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}