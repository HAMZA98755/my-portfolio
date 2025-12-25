'use client'
import { ReactNode } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function CombonentToWoarbPages({ children }: { children: ReactNode }) {
    const { colors } = useTheme();
    return (
        <div
            style={{ backgroundColor: colors.background, color: colors.text }}
            className="w-full min-h-screen"
        >
            {children}
        </div>
    );
}