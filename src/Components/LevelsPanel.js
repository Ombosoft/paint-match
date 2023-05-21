import StarIcon from "@mui/icons-material/Star";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { range } from "../Util/Utils";

// Choose level dialog
function LevelsPanel({
    open,
    onClose,
    curLevel,
    unlockedLevel,
    levelAchievements,
}) {
    function PickLevelButton({ level, won }) {
        return (
            <Button onClick={() => onClose(level)} sx={{ minWidth: "6em" }}>
                <Typography variant="h6" fontWeight="bold" color="secondary">
                    {level}
                </Typography>
                {won && <StarIcon sx={{ color: "gold" }} />}
            </Button>
        );
    }
    return (
        <Dialog open={open} onClose={() => onClose(curLevel)}>
            <DialogContent>
                {range(unlockedLevel + 1).map((level) => (
                    <PickLevelButton
                        key={level}
                        level={level}
                        won={levelAchievements[level]?.won}
                    />
                ))}
            </DialogContent>
        </Dialog>
    );
}

LevelsPanel.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    unlockedLevel: PropTypes.number.isRequired,
    levelAchievements: PropTypes.object.isRequired,
};

export default LevelsPanel;
