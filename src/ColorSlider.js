import {Slider, ThemeProvider} from "@mui/material";
import {theme} from "./Colors";
import React from "react";

export function ColorSlider({color, components, onSetComponentValue}) {
    return (<div className="Picker-slider">
        <ThemeProvider theme={theme}>
            <Slider value={components[color]} min={0} max={100} valueLabelDisplay="auto"
                    onChange={e => onSetComponentValue(color, parseInt(e.target.value))}
                    color={color}
            />
        </ThemeProvider>
    </div>)
}