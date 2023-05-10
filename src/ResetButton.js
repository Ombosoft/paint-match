import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

function ResetButton({ showTutorial, allowReset, resetColors }) {
    const enableReset = showTutorial || allowReset;

    const [openTooltip, setOpenTooltip] = React.useState(false);

    const handleClose = () => {
        setOpenTooltip(false);
    };

    const handleOpen = () => {
        setOpenTooltip(true);
    };

    return (
        <Tooltip
            title={showTutorial ? (<h1>Stuck? Press here to reset</h1>) : "Start over"}
            open={openTooltip || showTutorial}
            onClose={handleClose}
            onOpen={handleOpen}
            placement="top-end"
            arrow
            disabled={!enableReset}
            PopperProps={{
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [100, -18],
                        },
                    },
                ],
            }}
        >
            <IconButton
                onClick={resetColors}
                color="secondary"
                size="medium"
                disabled={!enableReset}>
                <ReplayIcon fontSize="large" />
            </IconButton>
        </Tooltip>
    );
}

export default ResetButton;