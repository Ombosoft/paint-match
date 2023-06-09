import ColorizeIcon from "@mui/icons-material/Colorize";
import {
    Button,
    IconButton,
    Stack,
    ThemeProvider,
    Tooltip,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { theme } from "../Colors";
import { NumDropletsContext } from "../Context/NumDropletsContext";
import { useDropletSound } from "../Sfx";

function ColorButton({ color, components, onClick, tooltip, showTooltip }) {
    const numDroplets = useContext(NumDropletsContext);
    const dropletSound = useDropletSound(numDroplets);
    const handleClick = () => {
        dropletSound();
        onClick(color);
    };
    return (
        <Stack direction="row" spacing={2} className="ButtonRow">
            <ThemeProvider theme={theme}>
                <Tooltip
                    title={<h1>{tooltip}</h1>}
                    open={showTooltip}
                    arrow
                    placement="bottom"
                >
                    <Button
                        className="Color-button"
                        variant="contained"
                        color={color}
                        sx={{
                            boxShadow:
                                "1px 1px 8px 2px rgba(255, 255, 255, 0.3)",
                            width: "8em",
                        }}
                        onClick={handleClick}
                    >
                        {color}
                    </Button>
                </Tooltip>
                <div style={{ width: "2em" }}>{components[color]}</div>
                <IconButton onClick={handleClick} style={{ padding: 0 }}>
                    <ColorizeIcon color={color} fontSize="large" />
                </IconButton>
            </ThemeProvider>
        </Stack>
    );
}

ColorButton.propTypes = {
    color: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    tooltip: PropTypes.string,
    showTooltip: PropTypes.bool,
};

export default ColorButton;
