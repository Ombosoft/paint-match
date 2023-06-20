import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { levelRGB, rgbToString, textColor } from "../Colors";
import { colorTable } from "../Levels";
import shiftPopper from "../Util/TooltipUtils";
import { range } from "../Util/Utils";
import StarRack from "./StarRack";

// Choose level dialog
function LevelsPanel({
    open,
    onClose,
    curLevel,
    unlockedLevel,
    levelAchievements,
}) {
    function PickLevelButton({ level, stars }) {
        const levelDef = colorTable[level];
        return (
            <Box component="span" sx={{ position: "relative" }}>
                <Tooltip
                    title={<Typography>{levelDef.name}</Typography>}
                    placement="top"
                    disableInteractive
                    {...shiftPopper(0, -13)}
                >
                    <Button
                        onClick={() => onClose(level)}
                        className="PickLevelButton"
                        sx={{
                            backgroundColor: "black",
                            backgroundImage: `linear-gradient(135deg, ${rgbToString(
                                levelRGB(levelDef)
                            )}, ${rgbToString(
                                levelRGB(levelDef)
                            )}70)`,
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontFamily="Nunito"
                            fontWeight="bold"
                            // threshold depends on additional black gradient
                            color={textColor(levelDef.cmyk, 62)}
                        >
                            {level}
                        </Typography>
                    </Button>
                </Tooltip>
                <StarRack
                    stars={stars}
                    stackSx={{
                        position: "absolute",
                        top: "3em",
                        left: "50%",
                        transform: "translate(-50%, 1.2em)",
                    }}
                    fontSize={0.85}
                />
            </Box>
        );
    }
    return (
        <Dialog
            open={open}
            onClose={() => onClose(curLevel)}
            PaperProps={{
                sx: {
                    borderRadius: "21px",
                    margin: "8px",
                },
            }}
        >
            <DialogContent
                sx={{
                    padding: "20px 14px",
                }}
            >
                <Stack direction="row" flexWrap="wrap" justifyContent="center">
                    {range(unlockedLevel + 1).map((level) => (
                        <PickLevelButton
                            key={level}
                            level={level}
                            stars={levelAchievements[level] ?? 0}
                        />
                    ))}
                </Stack>
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
