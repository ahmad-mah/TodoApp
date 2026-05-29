import { useContext } from "react";
import { ThemeContext } from "./themeProvider";



function useTheme(){
    return useContext(ThemeContext);
}