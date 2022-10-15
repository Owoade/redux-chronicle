import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    xs: "480px",
    sm: "600px",
    md: "768px",
    lg: "1000px",
    xl: "1200px",
    "2xl": "1536px",
});
const themeMap = {
    light: {
        bgColor: "white",
        color: "black"
    }, 
    dark: {
        bgColor: "black",
        color: "white"
    }
}
export const theme = (theme:Theme) => extendTheme({
    breakpoints,
    colors: {
        brand: themeMap[theme]
    }
});

type Theme = "light" | "dark";

