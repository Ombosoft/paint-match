import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { rgbToString, textColorFromRGB } from "../Colors";

function ColorCircle({
    inner,
    animationDuration,
    color,
    label,
    tooltip,
    showTooltip,
    diameter,
    labelWidth,
    labelFontSize,
}) {
    const offset = inner ? "50%" : "inherit";
    const transform = inner ? "translate(-50%, -50%)" : "inherit";
    return (
        <>
            <span
                className="Picker-square"
                style={{
                    backgroundColor: rgbToString(color),
                    transitionProperty: "background-color",
                    transitionDuration: `${animationDuration}ms`,
                    transitionTimingFunction: "ease-in",
                    position: inner ? "absolute" : "relative",
                    width: diameter,
                    height: diameter,
                    top: offset,
                    left: offset,
                    transform: transform,
                }}
            >
                {label && (
                    <Tooltip
                        title={<h1>{tooltip}</h1>}
                        open={showTooltip}
                        arrow
                        placement="bottom"
                    >
                        <div
                            style={{
                                width: labelWidth,
                                zIndex: "1",
                                color: textColorFromRGB(color),
                                transitionProperty: "font-size",
                                transitionDuration: "1s",
                                position:"absolute",
                                fontSize: labelFontSize,
                            }}
                        >
                            {label}
                        </div>
                    </Tooltip>
                )}
            </span>
        </>
    );
}

ColorCircle.propTypes = {
    inner: PropTypes.bool,
    color: PropTypes.string.isRequired,
    label: PropTypes.string,
    tooltip: PropTypes.any,
    showTooltip: PropTypes.bool,
    diameter: PropTypes.string,
    labelWidth: PropTypes.string,
    labelFontSize: PropTypes.string,
};

export default ColorCircle;
