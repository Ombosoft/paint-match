import StarIcon from "@mui/icons-material/Star";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Tooltip,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { levelRGB, rgbToString, textColor } from "../Colors";
import { colorTable } from "../Levels";
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
        const levelDef = colorTable[level];
        return (
            <Box component="span" sx={{ position: "relative" }}>
                <Tooltip
                    title={<Typography>{levelDef.name}</Typography>}
                    placement="top"
                    PopperProps={{
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [0, -30],
                                },
                            },
                        ],
                    }}
                >
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
                            backgroundImage: `linear-gradient(135deg, white, ${rgbToString(
                                levelRGB(levelDef)
                            )})`,
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            color={textColor(levelDef)}
                        >
                            {level}
                        </Typography>
                    </Button>
                </Tooltip>
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
