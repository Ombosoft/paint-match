import { IconButton, Tooltip } from "@mui/material";
import PropTypes from 'prop-types';
import React, { useCallback, useState } from "react";

// IconButton with tooltip that can be forced to show
function NiceButton({ title, enabled, onClick, forceTooltip, xOffset, children }) {
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
    }

    if (!enabled) {
        return (
            <IconButton
                color="secondary"
                size="medium"
                disabled>
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
            PopperProps={{
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [xOffset, -18],
                        },
                    },
                ],
            }}
        >
            <IconButton
                onClick={handleClick}
                color="secondary"
                size="medium"
            >
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
    title: PropTypes.any.isRequired,
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    forceTooltip: PropTypes.bool,
    xOffset: PropTypes.number,
    children: PropTypes.element.isRequired,
}


export default NiceButton;