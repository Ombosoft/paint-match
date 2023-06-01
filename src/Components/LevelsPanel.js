import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
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
            <Box component="span" sx={{position: "relative"}}>
                <Button
                    onClick={() => onClose(level)}
                    sx={{
                        width: "5em",
                        height: "4em",
                        border: "solid",
                        borderColor: "gray",
                        margin: "1em",
                        borderRadius: "1em",
                        boxShadow: "0px 1em 1px 1px",
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="secondary"
                    >
                        {level}
                    </Typography>
                </Button>
                {won && (
                    <StarIcon
                        sx={{
                            color: "gold",
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translate(-50%, 1.2em)",
                            fontSize: "1em",
                        }}
                    />
                )}
            </Box>
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
