import BugReportIcon from "@mui/icons-material/BugReport";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Stack } from "@mui/material";
import { textForeground } from "../Constants";
import CaptionButton from "./CaptionButton";

function ExtraMenu() {
    function showCredits() {}
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
                onClick={showCredits}
            >
                <ThumbUpIcon />
            </CaptionButton>
            <CaptionButton
                id="feedback"
                caption="Feedback"
                captionColor={textForeground}
                onClick={showCredits}
            >
                <BugReportIcon />
            </CaptionButton>
            <CaptionButton
                id="credits"
                caption="Credits"
                captionColor={textForeground}
                onClick={showCredits}
            >
                <PersonPinIcon />
            </CaptionButton>
        </Stack>
    );
}

export default ExtraMenu;
