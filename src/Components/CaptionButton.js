import { Box, IconButton, Stack } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { textForeground } from "../Constants";
import { gaButton } from "../GA";

// IconButton with a caption below
function CaptionButton({ id, caption, captionColor, onClick, children }) {
    function handleClick() {
        onClick();
        gaButton(id);
    }

    return (
        <Stack direction="column" alignItems="center" spacing={1}>
            <IconButton
                id={id}
                onClick={handleClick}
                size="large"
                sx={{
                    color: "secondary.main",
                    bgcolor: textForeground,
                    ":hover": {
                        bgcolor: "secondary.light",
                    },
                }}
            >
                {children}
            </IconButton>
            <Box sx={{ fontSize: "1rem" }} color={captionColor}>{caption}</Box>
        </Stack>
    );
}

CaptionButton.propTypes = {
    id: PropTypes.string.isRequired,
    caption: PropTypes.any.isRequired,
    captionColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

export default CaptionButton;
