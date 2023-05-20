import { Button, Dialog, DialogContent } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { range } from "../Util/Utils";

// Choose level dialog
function LevelsPanel({ open, onClose, curLevel, unlockedLevel }) {
    function PickLevelButton({ level }) {
        return <Button onClick={() => onClose(level)}>{level}</Button>;
    }
    return (
        <Dialog open={open} onClose={() => onClose(curLevel)}>
            <DialogContent>
                {range(unlockedLevel + 1).map((level) => (
                    <PickLevelButton key={level} level={level} />
                ))}
            </DialogContent>
        </Dialog>
    );
}

LevelsPanel.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    unlockedLevel: PropTypes.number.isRequired,
};

export default LevelsPanel;
