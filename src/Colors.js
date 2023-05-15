import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        red: {
            main: "#C01010",
            dark: "#D01010",
        },
        green: {
            main: "#10C010",
            dark: "#10D010",
        },
        blue: {
            main: "#1010C0",
            dark: "#1010D0",
        },
        cyan: {
            main: "#00D0D0",
            dark: "#00E0E0",
        },
        magenta: {
            main: "#D000D0",
            dark: "#E000E0",
        },
        yellow: {
            main: "#D0D000",
            dark: "#E0E000",
        },
        black: {
            main: "#181818",
            dark: "#000000",
        },
        white: {
            main: "#D8D8D8",
            dark: "#E8E8E8",
        },
    },
});
export const zeroComponents = {
    red: 0,
    green: 0,
    blue: 0,
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0,
    white: 0,
};
export const cmykColors = [
    { color: "cyan", minLevel: 1 },
    { color: "magenta", minLevel: 2 },
    { color: "yellow", minLevel: 0 },
    { color: "black", minLevel: 8 },
    { color: "white", minLevel: 4 },
    { color: "red", minLevel: 10 },
    { color: "green", minLevel: 12 },
    { color: "blue", minLevel: 15 },
];
