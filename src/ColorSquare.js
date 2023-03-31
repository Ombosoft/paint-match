import OpacityIcon from "@mui/icons-material/Opacity";
import React from "react";
import {animationDurationMs, dropletBlendDelay} from "./Constants";
import PropTypes from 'prop-types';

function ColorSquare({color, label, showColor, showDroplet, dropletColor}) {
    const dColor = dropletColor ? `${dropletColor}` : `#${color}`;
    const dDelay = dropletColor ? dropletBlendDelay : animationDurationMs - dropletBlendDelay;
    console.log("dc", dropletColor, dColor, dDelay);
    return (<>
            <span className="Picker-square" style={{
                backgroundColor: `#${color}`,
                transitionProperty: "background-color",
                transitionDuration: `${animationDurationMs}ms`,
                transitionTimingFunction: "ease-in-out"
            }}>
                {showDroplet && (
                    <OpacityIcon fontSize="large" style={{
                        color: `${dColor}`,
                        transitionDuration: `${dDelay}ms`,
                        transitionProperty: "color",
                        transitionTimingFunction: "ease-in-out"
                    }}/>
                )}
                {label && (<div>{label}</div>)}
                <div>
            {showColor && color}
            </div>
        </span>
        </>
    );
}

ColorSquare.propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string,
    showColor: PropTypes.bool,
    showDroplet: PropTypes.bool,
    dropletColor: PropTypes.string,
};

export default ColorSquare;