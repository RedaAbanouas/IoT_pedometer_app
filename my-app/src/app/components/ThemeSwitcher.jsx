// components/ThemeSwitcher.jsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  // 1. Initial State Handling: 
  // Sets a flag to ensure UI only renders after component mounts (client-side)
  // to prevent hydration mismatch errors, since theme detection is client-side.
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Don't render anything until mounted
  }

  // 2. Logic to display current theme and toggle
  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <div>
      <p>Current Theme: **{currentTheme}**</p>
      
      <button onClick={() => setTheme('light')} disabled={currentTheme === 'light'}>
        Light Mode
      </button>
      
      <button onClick={() => setTheme('dark')} disabled={currentTheme === 'dark'}>
        Dark Mode
      </button>
      
      <button onClick={() => setTheme('system')} disabled={theme === 'system'}>
        System Preference
      </button>
    </div>
  );
}