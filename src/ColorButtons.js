import { Stack } from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";
import ColorButton from "./ColorButton";

function ColorButtons({
    cmykColors,
    level,
    components,
    onClick, 
    showTooltip
}) {
    return (<Stack direction="column" spacing={1} sx={{marginTop:"1em"}}>
        <>{cmykColors.map(color =>
            level >= color.minLevel && <ColorButton
                key={color.color}
                color={color.color}
                components={components}
                onClick={onClick}
                tooltip="Press to Drop Paint"
                showTooltip={color.color === 'yellow' && showTooltip}
            />
        )
        }</>
    </Stack>);
}

ColorButtons.propTypes = {
    cmykColors: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            minLevel: PropTypes.number.isRequired,
        })
    ).isRequired,
    level: PropTypes.number.isRequired,
    components: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    showTooltip: PropTypes.bool,
};
export default ColorButtons;