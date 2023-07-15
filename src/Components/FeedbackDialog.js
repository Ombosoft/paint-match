import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Snackbar,
    Stack,
    TextField,
} from "@mui/material";
import * as Sentry from "@sentry/browser";
import PropTypes from "prop-types";
import React, { useState } from "react";

// Send freeform feedback to Sentry
function FeedbackDialog({ open, onClose }) {
    const [feedbackText, setFeedbackText] = useState("");
    const [thanksOpen, setThanksOpen] = useState(false);
    function sendFeedback() {
        const eventId = Sentry.captureMessage(feedbackText);
        const userFeedback = {
            event_id: eventId,
            comments: feedbackText,
        };
        Sentry.captureUserFeedback(userFeedback);
        setFeedbackText("");
        setThanksOpen(true);
        onClose();
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    sx: {
                        borderRadius: "21px",
                        margin: "8px",
                        fontSize: "1.3em",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        margin: 0,
                        padding: 2,
                        marginBottom: 0,
                        background: "#f0f0f0",
                    }}
                >
                    Share your experience
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    sx={{
                        padding: "14px 14px",
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={2}
                        margin={1}
                        marginBottom={0}
                    >
                        <Stack alignItems="center" direction="column">
                            <Box sx={{ padding: 0, fontSize: "1rem" }}>
                                Did anything go wrong? Can we do better? We
                                really love bug reports and treasure your ideas.
                                Please include a way to contact you if you want
                                to be contacted.
                            </Box>
                            <TextField
                                id="feedback-text"
                                multiline
                                fullWidth
                                rows={4}
                                value={feedbackText}
                                onChange={(event) => {
                                    setFeedbackText(event.target.value);
                                }}
                            />
                            <Button
                                size="large"
                                sx={{ alignSelf: "end" }}
                                onClick={sendFeedback}
                            >
                                Send
                            </Button>
                        </Stack>
                    </Stack>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={thanksOpen}
                autoHideDuration={2000}
                onClose={() => {
                    setThanksOpen(false);
                }}
                message="Thanks!"
            />
        </>
    );
}

FeedbackDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FeedbackDialog;
