/**
 * hooks/useTheme.js
 * Global dark/light theme hook using localStorage for persistence.
 * Defaults to 'dark' (professional law-firm default).
 */

'use client';

import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Read persisted preference
    const saved = localStorage.getItem('lex-theme') || localStorage.getItem('lex_theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else {
      // System preference fallback
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Apply to <html> data-theme attribute and CSS variables
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.background = theme === 'dark' ? '#0B1117' : '#F8F6F0';
    document.body.style.color      = theme === 'dark' ? '#F7F2E8' : '#0A1628';
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('lex-theme', next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
