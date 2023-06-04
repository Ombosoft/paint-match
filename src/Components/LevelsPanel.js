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
                    PopperProps={{
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [0, -13],
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
                            borderWidth: "thin",
                            borderColor: "gray",
                            margin: "1em",
                            borderRadius: "1em",
                            boxShadow: "0px 1em 0px 0px",
                            backgroundImage: `linear-gradient(135deg, white, ${rgbToString(
                                levelRGB(levelDef)
                            )})`,
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            color={textColor(levelDef.cmyk)}
                        >
                            {level}
                        </Typography>
                    </Button>
                </Tooltip>
                <StarRack
                    stars={stars}
                    stackSx={{
                        position: "absolute",
                        top: "3.05em",
                        left: "50%",
                        transform: "translate(-50%, 1.2em)",
                    }}
                    fontSize={0.85}
                />
            </Box>
        );
    }
    return (
        <Dialog open={open} onClose={() => onClose(curLevel)}>
            <DialogContent>
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
