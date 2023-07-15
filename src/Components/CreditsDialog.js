import {
    Dialog,
    DialogContent,
    Stack
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function CreditsDialog({
    open, onClose
}) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    borderRadius: "21px",
                    margin: "8px",
                },
            }}
        >
            <DialogContent
                sx={{
                    padding: "14px 14px",
                }}
            >
                <Stack direction="column" spacing={2}>
                    <h2>Hello!</h2>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

CreditsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CreditsDialog;
