import { Button, IconButton, Stack, ThemeProvider } from "@mui/material";
import { theme } from "./Colors";
import ColorizeIcon from "@mui/icons-material/Colorize";
import React from "react";
import PropTypes from 'prop-types';
import { Tooltip } from "@mui/material";

function ColorButton({ color, components, onClick, tooltip, showTooltip }) {
    const handleClick = () => onClick(color);
    return (
        <Stack direction="row" spacing={2} className="ButtonRow">
            <ThemeProvider theme={theme}>
                <Tooltip title={<h1>{tooltip}</h1>} open={showTooltip} arrow placement="top">
                    <Button className="Color-button"
                        variant="contained"
                        color={color}
                        onClick={handleClick}>
                        {color}
                    </Button>
                </Tooltip>
                <div>{components[color]}</div>
                <IconButton onClick={handleClick} style={{ padding: 0 }}>
                    <ColorizeIcon color={color} fontSize="large" />
                </IconButton>
            </ThemeProvider>
        </Stack>
    )
}

ColorButton.propTypes = {
    color: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    tooltip: PropTypes.string,
    showTooltip: PropTypes.bool,
};

export default ColorButton;