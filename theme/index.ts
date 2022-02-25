import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 360,
            sm: 760,
            md: 1024,
            lg: 1400,
            xl: 1900,
        }
    }
})

export default theme;