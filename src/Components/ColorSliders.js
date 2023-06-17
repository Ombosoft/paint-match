import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { cmykColors } from "../Colors";
import { useIsWide } from "../Util/ViewportDimensions";
import ColorSlider from "./ColorSlider";

function ColorSliders({ level, components, onSetComponentValue }) {
    const isWide = useIsWide();
    return (
        <Stack
            sx={{
                borderRadius: "0.8em",
                backgroundColor: "#505050a0",
                paddingTop: "0.5em",
                marginBottom: "4vmin",
                paddingLeft: "0.7em",
            }}
            width="100%"
            direction={isWide ? "row": "column"}
            flexWrap="wrap"
            justifyContent="space-between"
        >
            {cmykColors.map(
                (color) =>
                    level >= color.minLevel && (
                        <ColorSlider
                            key={color.color}
                            color={color.color}
                            components={components}
                            onSetComponentValue={onSetComponentValue}
                            width={isWide ? 50: 100 }
                        />
                    )
            )}
        </Stack>
    );
}

ColorSliders.propTypes = {
    level: PropTypes.number.isRequired,
    components: PropTypes.object.isRequired,
    onSetComponentValue: PropTypes.func.isRequired,
};

export default ColorSliders;
