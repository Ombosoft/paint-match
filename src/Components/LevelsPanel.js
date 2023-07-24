import {
    Box,
    Button,
    Dialog,
    Stack,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";
import { levelRGB, rgbToString, textColor } from "../Colors";
import { colorTable } from "../Levels";
import shiftPopper from "../Util/TooltipUtils";
import { range } from "../Util/Utils";
import ExtraMenu from "./ExtraMenu";
import LightTooltip from "./LightTooltip";
import ScrollableDialogContent from "./ScrollableDialogContent";
import StarRack from "./StarRack";


// Choose level dialog
function LevelsPanel({
    open,
    onClose,
    curLevel,
    unlockedLevel,
    levelAchievements,
    onCredits,
    onFeedback,
}) {
    const closePanel = useCallback(() => {
        onClose(curLevel);
    }, [curLevel, onClose]);
    const contentRef = useRef(null);
    useEffect(() => {
        if (open) {
          const { current } = contentRef;
          if (current) {
            current.scrollTop = current.scrollHeight;
          }
        }
      }, [open]);
    return (
        <>
            <Dialog
                open={open}
                onClose={closePanel}
                PaperProps={{
                    sx: {
                        borderRadius: "21px",
                        margin: "8px",
                        position: "relative",
                        "::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            background: `url(${
                                process.env.PUBLIC_URL + "/img/b2.jpg"
                            })`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            filter: "brightness(0.4)",
                        },
                    },
                }}
            >
                <ScrollableDialogContent open={open}
                    sx={{
                        padding: "14px 14px",
                    }}
                    ref={contentRef}
                >
                    <Stack direction="column" spacing={2}>
                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="center"
                        >
                            {range(unlockedLevel + 1).map((level) => (
                                <PickLevelButton
                                    key={level}
                                    level={level}
                                    stars={levelAchievements[level] ?? 0}
                                    onClose={onClose}
                                />
                            ))}
                        </Stack>
                        <ExtraMenu
                            onCredits={onCredits}
                            onFeedback={onFeedback}
                        />
                    </Stack>
                </ScrollableDialogContent>
            </Dialog>
        </>
    );
}

function PickLevelButton({ level, stars, onClose }) {
    const levelDef = colorTable[level];
    return (
        <Box component="span" sx={{ position: "relative" }}>
            <LightTooltip
                title={levelDef.name}
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
                        )}, ${rgbToString(levelRGB(levelDef))}70)`,
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
            </LightTooltip>
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

LevelsPanel.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onCredits: PropTypes.func.isRequired,
    onFeedback: PropTypes.func.isRequired,
    unlockedLevel: PropTypes.number.isRequired,
    levelAchievements: PropTypes.object.isRequired,
};

export default LevelsPanel;
