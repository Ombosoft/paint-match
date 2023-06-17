import { IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { gaButton } from "../GA";
import shiftPopper from "../Util/TooltipUtils";

// IconButton with tooltip that can be forced to show
function NiceButton({
    id,
    title,
    enabled,
    onClick,
    forceTooltip,
    xOffset,
    children,
}) {
    const [openTooltip, setOpenTooltip] = useState(false);

    function handleClose() {
        setOpenTooltip(false);
    }

    function handleOpen() {
        setOpenTooltip(true);
    }

    function handleClick() {
        setOpenTooltip(false);
        onClick();
        gaButton(id)
    }

    if (!enabled) {
        return (
            <IconButton color="secondary" size="medium" disabled>
                {children}
            </IconButton>
        );
    }

    return (
        <Tooltip
            title={title}
            open={openTooltip || forceTooltip}
            onClose={handleClose}
            onOpen={handleOpen}
            placement="top-end"
            arrow
            {...shiftPopper(xOffset, -11)}
        >
            <IconButton onClick={handleClick} color="secondary" size="medium">
                {children}
            </IconButton>
        </Tooltip>
    );
}

NiceButton.defaultProps = {
    forceTooltip: false,
    xOffset: 0,
};

NiceButton.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.any.isRequired,
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    forceTooltip: PropTypes.bool,
    xOffset: PropTypes.number,
    children: PropTypes.element.isRequired,
};

export default NiceButton;
