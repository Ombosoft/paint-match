import { Box, IconButton, Stack } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { gaButton } from "../GA";

// IconButton with a caption below
function CaptionButton({ id, caption, onClick, children }) {
    function handleClick() {
        onClick();
        gaButton(id);
    }

    return (
        <IconButton
            id={id}
            onClick={handleClick}
            color="secondary"
            size="medium"
        >
            <Stack direction="column" alignItems="center">
                {children}
                <Box sx={{ fontSize: "1rem" }}>{caption}</Box>
            </Stack>
        </IconButton>
    );
}

CaptionButton.propTypes = {
    id: PropTypes.string.isRequired,
    caption: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

export default CaptionButton;
