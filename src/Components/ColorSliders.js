import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { cmykColors } from "../Colors";
import ColorSlider from "./ColorSlider";

function ColorSliders({ level, components, onSetComponentValue }) {
    return (
        <Box
            sx={{
                borderRadius: "1em",
                backgroundColor: "#505050a0",
                paddingTop: "0.5em",
                marginBottom: "4vmin",
            }}
        >
            {cmykColors.map(
                (color) =>
                    level >= color.minLevel && (
                        <ColorSlider
                            key={color.color}
                            color={color.color}
                            components={components}
                            onSetComponentValue={onSetComponentValue}
                        />
                    )
            )}
        </Box>
    );
}

ColorSliders.propTypes = {
    level: PropTypes.number.isRequired,
    components: PropTypes.object.isRequired,
    onSetComponentValue: PropTypes.func.isRequired,
};

export default ColorSliders;
