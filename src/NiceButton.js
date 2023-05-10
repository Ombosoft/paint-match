import PropTypes from 'prop-types';
import React, { useCallback, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";

// IconButton with tooltip that can be forced to show
function NiceButton({ title, enabled, onClick, forceTooltip, xOffset, children }) {
    const [openTooltip, setOpenTooltip] = useState(false);

    const handleClose = useCallback(() => {
        setOpenTooltip(false);
    }, []);

    const handleOpen = useCallback(() => {
        setOpenTooltip(true);
    }, []);

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
                onClick={onClick}
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