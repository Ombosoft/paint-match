import BugReportIcon from "@mui/icons-material/BugReport";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { textForeground } from "../Constants";
import CaptionButton from "./CaptionButton";

function ExtraMenu({ onCredits, onFeedback }) {
    return (
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
                onClick={onCredits}
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
    );
}

ExtraMenu.propTypes = {
    onCredits: PropTypes.func.isRequired,
};
export default ExtraMenu;
