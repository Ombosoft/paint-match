import { Slider, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { theme } from "../Colors";

function ColorSlider({ color, components, onSetComponentValue, width }) {
    return (
        <div style={{ width: `calc(${width}vw - 2em)` }}>
            <ThemeProvider theme={theme}>
                <Slider
                    size="small"
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
    width: PropTypes.number.isRequired,
};

export default ColorSlider;
