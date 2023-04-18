import {Button, IconButton, Stack, ThemeProvider} from "@mui/material";
import {theme} from "./Colors";
import ColorizeIcon from "@mui/icons-material/Colorize";
import React from "react";
import PropTypes from 'prop-types';

function ColorButton({color, components, onClick}) {
    const handleClick = () => onClick(color);
    return (
        <Stack direction="row" spacing={2} className="ButtonRow">
            <ThemeProvider theme={theme}>
                <Button className="Color-button"
                        variant="contained"
                        color={color}
                        onClick={handleClick}>
                    {color}
                </Button>
                <div>{components[color]}</div>
                <IconButton onClick={handleClick} style={{padding: 0}}>
                    <ColorizeIcon color={color} fontSize="large"/>
                </IconButton>
            </ThemeProvider>
        </Stack>
    )
}

ColorButton.propTypes = {
    color: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ColorButton;