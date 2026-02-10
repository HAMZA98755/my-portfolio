// theme.ts

export type ThemeColors = {
    light: {
        background: string,
        border: string,
        text: string,
        textSecondary: string,
        tagBackground: string,   
        tagText: string,         
        buttonPrimaryBackground: string, // أزرق
        buttonPrimaryText: string,
        buttonSecondaryBackground: string, // أخضر
        buttonSecondaryText: string,
    }
    dark: {
        background: string,
        border: string,
        text: string,
        textSecondary: string,
        tagBackground: string,   
        tagText: string,         
        buttonPrimaryBackground: string, // أزرق
        buttonPrimaryText: string,
        buttonSecondaryBackground: string, // أخضر
        buttonSecondaryText: string,
    }
};

export type ThemeType = keyof ThemeColors

export const Themes: ThemeColors = {
    light: {
        background: "#FFFFFF",
        border: "#E5E7EB",
        text: "#1A1A1A",
        textSecondary: "#555555",
        tagBackground: "#DBEAFE",   
        tagText: "#1E40AF",         
        buttonPrimaryBackground: "#2563EB",
        buttonPrimaryText: "#FFFFFF",
        buttonSecondaryBackground: "#22C55E", 
        buttonSecondaryText: "#FFFFFF",
    },
    dark: {
        background: "#0F0F0F",
        border: "#2D2D2D",
        text: "#F5F5F5",
        textSecondary: "#A3A3A3",
        tagBackground: "#1F3A50",   
        tagText: "#93C5FD",    
        buttonPrimaryBackground: "#3B82F6",
        buttonPrimaryText: "#F5F5F5",
        buttonSecondaryBackground: "#16A34A",
        buttonSecondaryText: "#F5F5F5",
  },       
};
              

