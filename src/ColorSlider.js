import { Slider, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { theme } from "./Colors";

function ColorSlider({ color, components, onSetComponentValue }) {
    return (
        <div className="Picker-slider">
            <ThemeProvider theme={theme}>
                <Slider
                    value={components[color]}
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                    onChange={(e) =>
                        onSetComponentValue(color, parseInt(e.target.value))
                    }
                    color={color}
                />
            </ThemeProvider>
        </div>
    );
}

ColorSlider.propTypes = {
    color: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired,
    onSetComponentValue: PropTypes.func.isRequired,
};

export default ColorSlider;
