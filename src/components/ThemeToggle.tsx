
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Toggle
        pressed={theme === "light"}
        onPressedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
        className="rounded-full p-2"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-black" />
        ) : (
          <Moon className="h-5 w-5 text-saas-yellow" />
        )}
      </Toggle>
    </div>
  );
}
