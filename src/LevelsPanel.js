import { Button, Dialog, DialogContent } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function LevelsPanel({ open, onClose }) {
    return (
        <Dialog
            open={open}
            onClose={() => onClose(0)}
        >
            <DialogContent>
                <Button onClick={() => onClose(1)}>1</Button>
                <Button>2</Button>
            </DialogContent>
        </Dialog>
    );
}

LevelsPanel.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default LevelsPanel;
