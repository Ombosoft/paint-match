import OpacityIcon from "@mui/icons-material/Opacity";
import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { rgbToString } from "../Colors";
import { animationDurationMs, dropletBlendDelay } from "../Constants";

function ColorCircle({
    isInner,
    color,
    label,
    showColor,
    showDroplet,
    dropletColor,
    tooltip,
    showTooltip,
}) {
    const dColor = dropletColor ? `${dropletColor}` : rgbToString(color);
    const dDelay = dropletColor
        ? dropletBlendDelay
        : animationDurationMs - dropletBlendDelay;
    const offset = isInner ? "50%" : "inherit";
    const transform = isInner ? "translate(-50%, -50%)" : "inherit";
    const diameter = isInner ? "70%" : "100%" ;
    return (
        <>
            <span
                className="Picker-square"
                style={{
                    backgroundColor: rgbToString(color),
                    transitionProperty: "background-color",
                    transitionDuration: `${animationDurationMs}ms`,
                    transitionTimingFunction: "ease-in-out",
                    position: isInner ? "absolute" : "relative",
                    width: diameter,
                    height: diameter,
                    top: offset,
                    left: offset,
                    transform: transform,
            }}
            >
                {showDroplet && (
                    <OpacityIcon
                        style={{
                            color: `${dColor}`,
                            transitionDuration: `${dDelay}ms`,
                            transitionProperty: "color",
                            transitionTimingFunction: "ease-in-out",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: "0",
                            width: "60%",
                            height: "60%",
                        }}
                    />
                )}
                {label && (
                    <Tooltip
                        title={<h1>{tooltip}</h1>}
                        open={showTooltip}
                        arrow
                        placement="top"
                    >
                        <div
                            style={{
                                zIndex: "1",
                            }}
                        >
                            {label}
                            <div>{showColor && color}</div>
                        </div>
                    </Tooltip>
                )}
            </span>
        </>
    );
}

ColorCircle.propTypes = {
    isInner: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string,
    showColor: PropTypes.bool,
    showDroplet: PropTypes.bool,
    dropletColor: PropTypes.string,
    tooltip: PropTypes.any,
    showTooltip: PropTypes.bool,
};

export default ColorCircle;
