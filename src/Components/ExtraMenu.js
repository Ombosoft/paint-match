import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Box, Snackbar, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { imgPath, textForeground } from "../Constants";
import CaptionButton from "./CaptionButton";

function ExtraMenu({ onCredits, onFeedback }) {
    const [rateOpen, setRateOpen] = useState(false);
    function onRate() {
        setRateOpen(true);
    }
    return (
        <>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    zIndex: 1,
                    fontSize: "2em",
                    background: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "21px",
                    justifyContent: "center",
                    paddingTop: "0.5em",
                    paddingBottom: "0.3em",
                }}
            >
                <CaptionButton
                    id="rate"
                    caption="Rate Us"
                    captionColor={textForeground}
                    onClick={onRate}
                >
                    <ThumbUpIcon />
                </CaptionButton>
                <CaptionButton
                    id="feedback"
                    caption="Feedback"
                    captionColor={textForeground}
                    onClick={onFeedback}
                >
                    <BugReportIcon />
                </CaptionButton>
                <CaptionButton
                    id="credits"
                    caption="Credits"
                    captionColor={textForeground}
                    onClick={onCredits}
                >
                    <PersonPinIcon />
                </CaptionButton>
            </Stack>
            <Snackbar
                open={rateOpen}
                autoHideDuration={5000}
                onClose={() => {
                    setRateOpen(false);
                }}
                message={
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Box fontSize="1.5em">Please rate us on itch.io</Box>
                        <ArrowForwardIcon/>
                        <img src={imgPath("rate-itch.png")} alt="" />
                    </Stack>
                }
            ></Snackbar>
        </>
    );
}

ExtraMenu.propTypes = {
    onCredits: PropTypes.func.isRequired,
};
export default ExtraMenu;
