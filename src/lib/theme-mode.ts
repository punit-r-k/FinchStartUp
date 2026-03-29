export type ThemeMode = "light" | "dark";

export const THEME_STORAGE_KEY = "finch-theme-mode";

export function getPreferredThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedThemeMode = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedThemeMode === "dark" || storedThemeMode === "light") {
    return storedThemeMode;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyThemeMode(themeMode: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.toggle("dark", themeMode === "dark");
  root.dataset.themeMode = themeMode;
  root.style.colorScheme = themeMode;
}

export const themeModeBootstrapScript = `(() => {
  const storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
  const storedThemeMode = window.localStorage.getItem(storageKey);
  const themeMode =
    storedThemeMode === "dark" || storedThemeMode === "light"
      ? storedThemeMode
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  const root = document.documentElement;
  root.classList.toggle("dark", themeMode === "dark");
  root.dataset.themeMode = themeMode;
  root.style.colorScheme = themeMode;
})();`;
