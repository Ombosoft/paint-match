import PropTypes from "prop-types";
import React from "react";
import { cmykColors } from "../Colors";
import ColorSlider from "./ColorSlider";

function ColorSliders({ level, components, onSetComponentValue }) {
    return cmykColors.map(
        (color) =>
            level >= color.minLevel && (
                <ColorSlider
                    key={color.color}
                    color={color.color}
                    components={components}
                    onSetComponentValue={onSetComponentValue}
                />
            )
    );
}

ColorSliders.propTypes = {
    cmykColors: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            minLevel: PropTypes.number.isRequired,
        })
    ).isRequired,
    level: PropTypes.number.isRequired,
    components: PropTypes.object.isRequired,
    onSetComponentValue: PropTypes.func.isRequired,
};

export default ColorSliders;
