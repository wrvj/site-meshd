import createTheme from "@mui/material/styles/createTheme";

export const MeshdTheme = {
    colors: {
        red: "#f26b6b",
        blue: "#1766ab",
        green: "#41BA91",
        black: "#050707",
        darkgrey: "#161b1f",
        white: "#FFFFFF",
    },
    dimensions: {
        maxColumnWidth: "1024px",
        navBarHeight: "80px",
        footerHeight: "600px",
    },
    breakpoints: {
        large: "1500px",
        desktop: "1200px",
        tablet: "768px",
        mobile: "375px"
    }
}

export const MeshdMUITheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1766ab",
        },
        secondary: {
            main: "#41BA91"
        },
        error: {
            main: "#f26b6b"
        },
    },
});